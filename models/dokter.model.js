module.exports = (sequelize, Sequelize) => {
  const Dokter = sequelize.define("doctor", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama_dokter: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    spesialisasi: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    jadwal_praktek: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    info_klinik: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    img_dokter: {
      type: Sequelize.STRING,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  });

  return Dokter;
};
