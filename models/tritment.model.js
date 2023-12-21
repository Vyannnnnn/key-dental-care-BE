module.exports = (sequelize, Sequelize) => {
  const Treatment = sequelize.define("treatment", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: Sequelize.INTEGER,
    },
    nama_layanan: {
      type: Sequelize.STRING,
    },
    deskripsi: {
      type: Sequelize.TEXT,
    },
    harga: {
      type: Sequelize.INTEGER,
    },
    keterangan_tambahan: {
      type: Sequelize.TEXT,
    },
    hari_tanggal: {
      type: Sequelize.DATE,
    },
  });

  return Treatment;
};
