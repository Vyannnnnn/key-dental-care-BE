'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_roles', {
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users', // Tabel 'users' sebagai referensi
          key: 'id',
        },
        onDelete: 'CASCADE',
        allowNull: false, // Optional, but recommended
      },
      roleId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'roles', // Tabel 'roles' sebagai referensi
          key: 'id',
        },
        onDelete: 'CASCADE',
        allowNull: false, // Optional, but recommended
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    // Menambahkan primary key pada kombinasi userId dan roleId
    await queryInterface.addConstraint('user_roles', {
      fields: ['userId', 'roleId'],
      type: 'primary key',
      name: 'user_roles_pkey',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_roles');
  }
};
