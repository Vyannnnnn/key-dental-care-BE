'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('patients', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      rekam_medis_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
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
        allowNull: true,
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
        defaultValue: 'Disetujui',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('patients');
  },
};
