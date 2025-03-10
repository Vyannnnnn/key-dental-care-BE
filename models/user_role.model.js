module.exports = (sequelize, Sequelize) => {
    const UserRole = sequelize.define("user_roles", {
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users', // Tabel 'users' sebagai referensi
          key: 'id',
        },
      },
      roleId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'roles', // Tabel 'roles' sebagai referensi
          key: 'id',
        },
      },
    });
  
    return UserRole;
  };
  