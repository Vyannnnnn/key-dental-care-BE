'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('timetables', [
      {
        hari: 'Senin',
        tanggal: '2025-02-03',
        mulai_jam: '08:00:00',
        sampai_jam: '10:00:00',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hari: 'Selasa',
        tanggal: '2025-02-04',
        mulai_jam: '09:00:00',
        sampai_jam: '11:00:00',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('timetables', null, {});
  },
};
