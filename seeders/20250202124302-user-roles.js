'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Ambil data user berdasarkan username
    const users = await queryInterface.sequelize.query(
      `SELECT id, username FROM users WHERE username = 'adminUser' OR username = 'dokterUser';`,
      { type: Sequelize.QueryTypes.SELECT }
    );
    
    // Ambil data role berdasarkan nama role
    const roles = await queryInterface.sequelize.query(
      `SELECT id, name FROM roles WHERE name = 'admin' OR name = 'dokter';`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    // Pastikan data ditemukan
    if (!users || users.length === 0) {
      throw new Error('User data not found');
    }
    if (!roles || roles.length === 0) {
      throw new Error('Role data not found');
    }

    const adminUser = users.find(user => user.username === 'adminUser');
    const dokterUser = users.find(user => user.username === 'dokterUser');
    const adminRole = roles.find(role => role.name === 'admin');
    const dokterRole = roles.find(role => role.name === 'dokter');

    // Pastikan adminUser, dokterUser, adminRole, dokterRole ditemukan
    if (!adminUser || !dokterUser || !adminRole || !dokterRole) {
      throw new Error('Required user or role not found');
    }

    // Insert data ke dalam user_roles
    await queryInterface.bulkInsert('user_roles', [
      {
        userId: adminUser.id,
        roleId: adminRole.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: dokterUser.id,
        roleId: dokterRole.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_roles', null, {});
  }
};
