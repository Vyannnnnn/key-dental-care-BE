'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('patients', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      rekam_medis_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      kode_antrian: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      layanan: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nomor_telepon: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hari_tanggal: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      jam_kunjungan: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('patients');
  },
};
