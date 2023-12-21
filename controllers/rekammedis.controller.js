const db = require("../models");
const RekamMedis = db.rekammedis;

class RekamMedisController {
  async getAllRekamMedis(req, res) {
    try {
      const allRekamMedis = await RekamMedis.findAll();

      res.json({ allRekamMedis });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getRekamMedisByPasienId(req, res) {
    try {
      const { pasien_id } = req.params;

      const rekamMedis = await RekamMedis.findAll({
        where: { pasien_id: pasien_id },
      });

      if (!rekamMedis || rekamMedis.length === 0) {
        return res.status(404).json({ error: "Rekam medis not found" });
      }

      res.json({ rekamMedis });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async createRekamMedis(req, res) {
    try {
      const {
        pasien_id,
        kode_rekam_medis,
        dokter,
        keluhan,
        diagnosa,
        tindakan,
        keterangan,
        tanggal_pemeriksaan,
      } = req.body;

      const newRekamMedis = await RekamMedis.create({
        pasien_id,
        kode_rekam_medis,
        dokter,
        keluhan,
        diagnosa,
        tindakan,
        keterangan,
        tanggal_pemeriksaan,
      });

      res.status(201).json({ newRekamMedis });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getRekamMedisById(req, res) {
    try {
      const { id } = req.params;

      const rekamMedis = await RekamMedis.findByPk(id);

      if (!rekamMedis) {
        return res.status(404).json({ error: "Rekam medis not found" });
      }

      res.json({ rekamMedis });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async updateRekamMedis(req, res) {
    try {
      const { id } = req.params;
      const {
        pasien_id,
        kode_rekam_medis,
        dokter,
        keluhan,
        diagnosa,
        tindakan,
        keterangan,
        tanggal_pemeriksaan,
      } = req.body;

      const rekamMedis = await RekamMedis.findByPk(id);

      if (!rekamMedis) {
        return res.status(404).json({ error: "Rekam medis not found" });
      }

      await rekamMedis.update({
        pasien_id,
        kode_rekam_medis,
        dokter,
        keluhan,
        diagnosa,
        tindakan,
        keterangan,
        tanggal_pemeriksaan,
      });

      res.json({ message: "Rekam medis updated successfully", rekamMedis });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async deleteRekamMedis(req, res) {
    try {
      const { id } = req.params;

      const rekamMedis = await RekamMedis.findByPk(id);

      if (!rekamMedis) {
        return res.status(404).json({ error: "Rekam medis not found" });
      }

      await rekamMedis.destroy();

      res.json({ message: "Rekam medis deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

const object = new RekamMedisController();

module.exports = object;
