'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('queues', [
      {
        user_id: 1,
        nama: 'John Doe',
        kode_antrian: 'K-0001',
        pelayanan: 'General Checkup',
        no_telepon: '08123456789',
        hari_tanggal: '2025-02-03',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        nama: 'Jane Smith',
        kode_antrian: 'K-0002',
        pelayanan: 'Dental Cleaning',
        no_telepon: '08129876543',
        hari_tanggal: '2025-02-04',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('queues', null, {});
  },
};
