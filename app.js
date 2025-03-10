const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const router = require("./routes/api.routes.js");
const cors = require("cors");
const cookieSession = require("cookie-session");
require("dotenv").config();
const db = require("./models");
const Chat = db.chat;
const User = db.user;
const bodyParser = require("body-parser");
const otpGenerator = require("otp-generator");
const twilio = require("twilio");
const multer = require("multer");
const path = require("path");

const { APP_PORT } = process.env;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "bezkoder-session",
    keys: ["COOKIE_SECRET"],
    httpOnly: true,
    sameSite: "strict",
  })
);

app.use(express.json());
app.use(express.static("public"));

require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);

const server = http.createServer(app);

const io = socketIo(server, {
  cors: {
    origin: "*",
  },
});

app.get("/chat/:userId", (req, res) => {
  res.sendFile(__dirname + "/public/chatAdminChat.html");
});

app.set("io", io);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "public/img/"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage }).single("image");

app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: err.message });
    } else if (err) {
      return res.status(500).json({ error: err.message });
    }

    const imagePath = req.file ? req.file.filename : null;
    res.json({ imagePath });
  });
});

io.on("connection", (socket) => {
  console.log("A client connected");

  socket.on(
    "sendMessage",
    async ({ senderId, receiverId, message, imagePath }) => {
      const moment = require("moment");
      const waktu_pengiriman = moment().format("YYYY-MM-DD HH:mm:ss");

      try {
        const newChat = await Chat.create({
          pengirim_id: senderId,
          penerima_id: receiverId,
          pesan: message,
          waktu_pengiriman: waktu_pengiriman,
          status: "terkirim",
          lampiran_gambar: imagePath ? imagePath : null,
        });

        const senderUser = await User.findOne({
          where: { id: senderId },
          attributes: ["username"],
        });

        const dataToSend = {
          senderId,
          receiverId,
          message,
          lampiran_gambar: imagePath ? imagePath : null,
          senderName: senderUser ? senderUser.username : "Unknown",
          timestamp: waktu_pengiriman,
        };

        io.emit("receiveMessage", dataToSend);
      } catch (error) {
        console.error("Error sending message:", error);
        socket.emit("sendMessageError", { error: error.message });
      }
    }
  );

  socket.on("disconnect", () => {
    console.log("A client disconnected");
  });
});

io.on("messageRead", async ({ messageId }) => {
  try {
    const chatMessage = await Chat.findByPk(messageId);

    if (chatMessage) {
      chatMessage.status = "read";
      await chatMessage.save();

      io.emit("messageReadConfirmation", { messageId });
    }
  } catch (error) {
    console.error("Error marking message as read:", error);
  }
});

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(accountSid, authToken);

const otpMap = new Map();

app.post("/kirim-otp", async (req, res) => {
  const phoneNumber = req.body.phoneNumber;

  const otp = otpGenerator.generate(4, {
    digits: true,
    alphabets: false,
    upperCase: false,
  });

  otpMap.set(phoneNumber, otp);

  try {
    await client.messages.create({
      body: `Kode OTP Anda adalah: ${otp}`,
      from: "081299094123",
      to: phoneNumber,
    });

    res.json({ message: "OTP berhasil dikirim." });
  } catch (err) {
    res.status(500).json({ message: "Gagal mengirim OTP." });
  }
});

app.post("/verifikasi-otp", (req, res) => {
  const phoneNumber = req.body.phoneNumber;
  const userOTP = req.body.otp;

  const savedOTP = otpMap.get(phoneNumber);

  if (!savedOTP) {
    return res
      .status(400)
      .json({ message: "OTP tidak ditemukan. Kirim OTP terlebih dahulu." });
  }

  if (savedOTP === userOTP) {
    res.json({ message: "OTP benar. Proses verifikasi berhasil." });
  } else {
    res.status(400).json({ message: "OTP salah. Proses verifikasi gagal." });
  }
});

app.get("/profile", (req, res) => {
  res.sendFile(__dirname + "/../public/tesFT/profile.html");
});

const chatController = require("./controllers/chat.controller.js");
app.get("/chat/riwayat/:id", chatController.getChatHistory);
app.get("/admin-chats", chatController.getChatUserAllAdmin);

app.use(router);

server.listen(APP_PORT, () =>
  console.log(`Server running at: http://localhost:${APP_PORT}`)
);
