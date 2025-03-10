'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('queues', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      kode_antrian: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      pelayanan: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      no_telepon: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      hari_tanggal: {
        type: Sequelize.STRING,
        allowNull: true,
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

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('queues');
  },
};