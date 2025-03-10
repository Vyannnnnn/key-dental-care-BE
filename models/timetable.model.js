module.exports = (sequelize, Sequelize) => {
  const Timetable = sequelize.define("timetable", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    hari: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tanggal: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    mulai_jam: {
      type: Sequelize.TIME,
      allowNull: false,
    },
    sampai_jam: {
      type: Sequelize.TIME,
      allowNull: false,
    },
  });

  return Timetable;
};
