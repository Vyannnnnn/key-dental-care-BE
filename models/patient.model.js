module.exports = (sequelize, Sequelize) => {
  const Patient = sequelize.define("patient", {
    user_id: {
      type: Sequelize.INTEGER,
    },
    rekam_medis_id: {
      type: Sequelize.INTEGER,
    },
    nama: {
      type: Sequelize.STRING,
    },
    kode_antrian: {
      type: Sequelize.STRING,
    },
    layanan: {
      type: Sequelize.STRING,
    },
    nomor_telepon: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    hari_tanggal: {
      type: Sequelize.STRING,
    },
    jam_kunjungan: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.STRING,
    },
  });

  return Patient;
};
