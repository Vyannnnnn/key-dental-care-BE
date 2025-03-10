'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('treatments', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
      nama_layanan: {
        type: Sequelize.STRING,
      },
      deskripsi: {
        type: Sequelize.TEXT,
      },
      harga: {
        type: Sequelize.INTEGER,
      },
      keterangan_tambahan: {
        type: Sequelize.TEXT,
      },
      hari_tanggal: {
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('treatments');
  },
};
