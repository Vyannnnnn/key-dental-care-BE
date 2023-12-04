module.exports = (sequelize, Sequelize) => {
  const Queue = sequelize.define("queue", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: Sequelize.INTEGER,
    },
    nama: {
      type: Sequelize.STRING,
    },
    kode_antrian: {
      type: Sequelize.STRING,
    },
    pelayanan: {
      type: Sequelize.STRING,
    },
    no_telepon: {
      type: Sequelize.STRING,
    },
    hari_tanggal: {
      type: Sequelize.STRING,
    },
  });

  return Queue;
};
