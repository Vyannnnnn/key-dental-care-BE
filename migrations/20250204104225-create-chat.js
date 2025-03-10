'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('chats', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      pengirim_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      penerima_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      pesan: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      waktu_pengiriman: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      lampiran_gambar: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      status: {
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
    await queryInterface.dropTable('chats');
  },
};