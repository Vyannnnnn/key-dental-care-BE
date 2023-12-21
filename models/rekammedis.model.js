module.exports = (sequelize, Sequelize) => {
  const RekamMedis = sequelize.define("rekam_medis", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pasien_id: {
      type: Sequelize.INTEGER,
    },
    kode_rekam_medis: {
      type: Sequelize.STRING,
    },
    dokter: {
      type: Sequelize.STRING,
    },
    keluhan: {
      type: Sequelize.TEXT,
    },
    diagnosa: {
      type: Sequelize.TEXT,
    },
    tindakan: {
      type: Sequelize.TEXT,
    },
    keterangan: {
      type: Sequelize.TEXT,
    },
    tanggal_pemeriksaan: {
      type: Sequelize.DATE,
    },
  });

  return RekamMedis;
};
