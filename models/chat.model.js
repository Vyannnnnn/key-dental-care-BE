module.exports = (sequelize, Sequelize) => {
  const Chat = sequelize.define("chat", {
    chat_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pengirim_id: {
      type: Sequelize.INTEGER,
    },
    penerima_id: {
      type: Sequelize.INTEGER,
    },
    pesan: {
      type: Sequelize.TEXT,
    },
    waktu_pengiriman: {
      type: Sequelize.STRING,
    },
    lampiran_gambar: {
      type: Sequelize.STRING,
    },
  });

  return Chat;
};
