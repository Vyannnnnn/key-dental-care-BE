const db = require("../models");
const User = db.user;

class UserController {
  async getUserById(req, res) {
    const { id } = req.params;
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json({ user });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async updateUserById(req, res) {
    const { id } = req.params;
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const {
        username,
        email,
        phone_number,
        profile_photo,
        tanggal_lahir,
        jenis_kelamin,
        alamat,
      } = req.body;

      await User.update(
        {
          username,
          email,
          phone_number,
          profile_photo,
          tanggal_lahir,
          jenis_kelamin,
          alamat,
        },
        { where: { id } }
      );

      res.json({ message: "User updated successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getAllUsers(req, res) {
    try {
      const users = await User.findAll();
      res.json({ users });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async deleteUserById(req, res) {
    const { id } = req.params;
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      await User.destroy({ where: { id } });

      res.json({ message: "User deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

const userController = new UserController();

module.exports = userController;
