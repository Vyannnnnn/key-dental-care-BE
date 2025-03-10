const bcrypt = require('bcryptjs');  // Pastikan bcrypt di-import untuk hashing password

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        username: 'adminUser',
        email: 'admin@example.com',
        password: bcrypt.hashSync('adminpassword', 8),  // Enkripsi password
        phone_number: '1234567890',
        profile_photo: 'path/to/photo',
        tanggal_lahir: new Date('1990-01-01'),
        jenis_kelamin: 'Male',
        alamat: 'Jl. Admin 123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'dokterUser',
        email: 'dokter@example.com',
        password: bcrypt.hashSync('dokterpassword', 8),
        phone_number: '0987654321',
        profile_photo: 'path/to/photo',
        tanggal_lahir: new Date('1985-05-15'),
        jenis_kelamin: 'Female',
        alamat: 'Jl. Dokter 456',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
