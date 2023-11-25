const express = require("express");
const router = require("./routes/api.js");

require("dotenv").config();

const { APP_PORT } = process.env;

const app = express();

app.use(express.json());

app.use(router);

app.listen(APP_PORT, () =>
  console.log(`Server running at: http://localhost:${APP_PORT}`)
);
