const db = require("../models");
const { Op } = require("sequelize");
const Chat = db.chat;
const User = db.user;

class ChatController {
  async getChatHistory(req, res) {
    const senderId = req.params.id;

    console.log(senderId);

    try {
      const chatHistory = await Chat.findAll({
        where: {
          [Op.or]: [
            {
              pengirim_id: senderId,
              penerima_id: 3,
            },
            {
              pengirim_id: 3,
              penerima_id: senderId,
            },
          ],
        },
        include: [
          {
            model: User,
            as: "Sender",
            attributes: ["username"],
            where: { id: { [Op.col]: "chat.pengirim_id" } },
          },
          {
            model: User,
            as: "Receiver",
            attributes: ["username"],
            where: { id: { [Op.col]: "chat.penerima_id" } },
          },
        ],
        order: [["created_at", "ASC"]],
      });

      const chatData = chatHistory.map((chat) => ({
        senderId: chat.pengirim_id === "3" ? "admin" : chat.pengirim_id,
        senderName: chat.Sender.username,
        receiverName: chat.Receiver.username,
        status: chat.status,
        message: chat.pesan,
        timestamp: chat.waktu_pengiriman,
        lampiran_gambar: chat.lampiran_gambar,
      }));

      res.json(chatData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getChatUserAllAdmin(req, res) {
    const userId = 3;
    try {
      const adminChats = await Chat.findAll({
        attributes: ["pengirim_id"],
        where: {
          penerima_id: userId,
        },
        group: ["pengirim_id"],
        raw: true,
      });

      const chatDataAdmin = [];
      for (const chat of adminChats) {
        const sender = await User.findOne({
          attributes: ["username", "profile_photo"],
          where: { id: chat.pengirim_id },
        });
        const receiver = await User.findOne({
          attributes: ["username"],
          where: { id: userId },
        });

        chatDataAdmin.push({
          senderId: chat.pengirim_id === 3 ? "admin" : chat.pengirim_id,
          senderName: sender ? sender.username : "Unknown",
          receiverName: receiver ? receiver.username : "Unknown",
          profileSender: sender ? sender.profile_photo : "Unknown",
        });
      }

      res.json(chatDataAdmin);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createChatMessage(req, res) {
    const receiverId = req.params.receiverId;
    const { senderId, message } = req.body;

    try {
      const newChat = await Chat.create({
        pengirim_id: senderId,
        penerima_id: receiverId,
        pesan: message,
      });

      res.status(201).json(newChat);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

const chatController = new ChatController();

module.exports = chatController;
