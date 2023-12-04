module.exports = (sequelize, Sequelize) => {
  const ProgramData = sequelize.define("program_datas", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama_program: {
      type: Sequelize.STRING,
    },
    deskripsi_program: {
      type: Sequelize.TEXT,
    },
    harga_program: {
      type: Sequelize.STRING,
    },
    thumbnail: {
      type: Sequelize.STRING,
    },
  });

  return ProgramData;
};
