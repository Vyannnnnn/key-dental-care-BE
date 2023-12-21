module.exports = (sequelize, Sequelize) => {
  const Notifikasi = sequelize.define("notification", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: Sequelize.INTEGER,
    },
    isi_notifikasi: {
      type: Sequelize.TEXT,
    },
    waktu_pengiriman: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
    status: {
      type: Sequelize.STRING,
    },
  });

  return Notifikasi;
};
