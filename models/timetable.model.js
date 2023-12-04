module.exports = (sequelize, Sequelize) => {
  const Timetable = sequelize.define("timetable", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    hari: {
      type: Sequelize.STRING,
    },
    tanggal: {
      type: Sequelize.STRING,
    },
    mulai_jam: {
      type: Sequelize.TIME,
    },
    sampai_jam: {
      type: Sequelize.TIME,
    },
  });

  return Timetable;
};
