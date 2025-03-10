const { Sequelize } = require("sequelize");
require("dotenv").config();

// Buat koneksi ke database
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

// Tes koneksi
async function checkConnection() {
  try {
    await sequelize.authenticate();
    console.log("✅ Database berhasil terkoneksi!");
  } catch (error) {
    console.error("❌ Gagal konek ke database:", error.message);
  }
}

checkConnection();
