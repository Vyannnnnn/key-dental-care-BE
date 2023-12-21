const db = require("../models");
const Treatment = db.tritmen;

class TreatmentController {
  async createTreatment(req, res) {
    try {
      const {
        user_id,
        nama_layanan,
        deskripsi,
        harga,
        keterangan_tambahan,
        hari_tanggal,
      } = req.body;

      const newTreatment = await Treatment.create({
        user_id,
        nama_layanan,
        deskripsi,
        harga,
        keterangan_tambahan,
        hari_tanggal,
      });

      res.status(201).json({ newTreatment });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getTreatmentById(req, res) {
    const { id } = req.params;
    try {
      const treatment = await Treatment.findByPk(id);
      if (!treatment) {
        return res.status(404).json({ message: "Treatment not found" });
      }
      res.json({ treatment });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async updateTreatmentById(req, res) {
    const { id } = req.params;
    try {
      const treatment = await Treatment.findByPk(id);
      if (!treatment) {
        return res.status(404).json({ message: "Treatment not found" });
      }

      const {
        user_id,
        nama_layanan,
        deskripsi,
        harga,
        keterangan_tambahan,
        hari_tanggal,
      } = req.body;

      await Treatment.update(
        {
          user_id,
          nama_layanan,
          deskripsi,
          harga,
          keterangan_tambahan,
          hari_tanggal,
        },
        { where: { id } }
      );

      res.json({ message: "Treatment updated successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getAllTreatments(req, res) {
    try {
      const treatments = await Treatment.findAll();
      res.json({ treatments });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async deleteTreatmentById(req, res) {
    const { id } = req.params;
    try {
      const treatment = await Treatment.findByPk(id);
      if (!treatment) {
        return res.status(404).json({ message: "Treatment not found" });
      }

      await Treatment.destroy({ where: { id } });

      res.json({ message: "Treatment deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getTreatmentsByUserId(req, res) {
    const { user_id } = req.params;
    try {
      const treatments = await Treatment.findAll({
        where: { user_id },
      });

      if (!treatments || treatments.length === 0) {
        return res
          .status(404)
          .json({ message: "Treatments not found for this user" });
      }

      res.json({ treatments });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

const treatmentController = new TreatmentController();

module.exports = treatmentController;
