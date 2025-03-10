'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('rekam_medis', [
      {
        pasien_id: 1,
        kode_rekam_medis: 'RM001',
        dokter: 'Dr. A',
        keluhan: 'Sakit kepala',
        diagnosa: 'Migrain',
        tindakan: 'Memberikan obat',
        keterangan: 'Perlu follow-up setelah 2 minggu',
        tanggal_pemeriksaan: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        pasien_id: 2,
        kode_rekam_medis: 'RM002',
        dokter: 'Dr. B',
        keluhan: 'Nyeri gigi',
        diagnosa: 'Gigi berlubang',
        tindakan: 'Tambal gigi',
        keterangan: 'Rekomendasi perawatan rutin',
        tanggal_pemeriksaan: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('rekam_medis', null, {});
  },
};
