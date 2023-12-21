const db = require("../models");
const Notifikasi = db.notifikasi;

class NotifikasiController {
  async getNotifikasiByUserId(req, res) {
    const { user_id } = req.params;
    try {
      const notifikasi = await Notifikasi.findAll({
        where: { user_id },
        order: [["createdAt", "DESC"]],
      });

      if (!notifikasi || notifikasi.length === 0) {
        return res
          .status(404)
          .json({ message: "Notifications not found for this user" });
      }

      res.json({ notifikasi });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

const notifikasiController = new NotifikasiController();

module.exports = notifikasiController;
