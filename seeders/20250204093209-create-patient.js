'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('patients', [
      {
        user_id: 1,
        rekam_medis_id: 101,
        nama: 'John Doe',
        kode_antrian: 'A001',
        layanan: 'Pemeriksaan Gigi',
        nomor_telepon: '081234567890',
        email: 'john.doe@example.com',
        hari_tanggal: '2025-02-03',
        jam_kunjungan: '10:00',
        status: 'Disetujui',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        rekam_medis_id: 102,
        nama: 'Jane Doe',
        kode_antrian: 'A002',
        layanan: 'Scaling Gigi',
        nomor_telepon: '081234567891',
        email: 'jane.doe@example.com',
        hari_tanggal: '2025-02-03',
        jam_kunjungan: '11:00',
        status: 'Disetujui',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('patients', null, {});
  },
};
