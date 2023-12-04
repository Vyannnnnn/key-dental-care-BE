const express = require("express");
const router = require("./routes/api.routes.js");
const cors = require("cors");
const cookieSession = require("cookie-session");
require("dotenv").config();

const { APP_PORT } = process.env;

const app = express();

// middleware CORS
app.use(cors());

// application/x-www-form-urlencoded
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

app.use(router);

app.listen(APP_PORT, () =>
  console.log(`Server running at: http://localhost:${APP_PORT}`)
);
