'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('chats', [
      {
        pengirim_id: 1,
        penerima_id: 3,
        pesan: 'Halo, ini pesan pertama!',
        waktu_pengiriman: new Date().toISOString(),
        lampiran_gambar: null,
        status: 'terkirim',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pengirim_id: 3,
        penerima_id: 1,
        pesan: 'Hai juga! Ini balasan.',
        waktu_pengiriman: new Date().toISOString(),
        lampiran_gambar: null,
        status: 'dibaca',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('chats', null, {});
  },
};
