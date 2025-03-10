
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('timetables', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
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
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('timetables');
  },
};
