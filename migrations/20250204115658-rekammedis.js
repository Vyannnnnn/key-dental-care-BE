'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('rekam_medis', {
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('rekam_medis');
  },
};
