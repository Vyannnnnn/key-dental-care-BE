const db = require("../models");
const Dokter = db.dokter;
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/img/"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage }).single("img_dokter");

class DokterController {
  async addDoctorWithImage(req, res) {
    upload(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: err.message });
      } else if (err) {
        return res.status(500).json({ error: err.message });
      }

      const { nama_dokter, spesialisasi, jadwal_praktek, info_klinik } =
        req.body;
      const img_dokter = req.file.filename;

      try {
        const newDoctor = await Dokter.create({
          nama_dokter,
          spesialisasi,
          jadwal_praktek,
          info_klinik,
          img_dokter,
        });
        res.json({ id: newDoctor.id });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });
  }

  async getAllDoctors(req, res) {
    try {
      const doctors = await Dokter.findAll();
      res.json({ doctors });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getDoctorById(req, res) {
    const { id } = req.params;
    try {
      const doctor = await Dokter.findByPk(id);
      if (!doctor) {
        return res.status(404).json({ message: "Doctor not found" });
      }
      res.json({ doctor });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async updateDoctorById(req, res) {
    const { id } = req.params;
    upload(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: err.message });
      } else if (err) {
        return res.status(500).json({ error: err.message });
      }

      try {
        const doctor = await Dokter.findByPk(id);
        if (!doctor) {
          return res.status(404).json({ message: "Doctor not found" });
        }

        const { nama_dokter, spesialisasi, jadwal_praktek, info_klinik } =
          req.body;
        const img_dokter = req.file.filename || doctor.img_dokter;

        await Dokter.update(
          {
            nama_dokter,
            spesialisasi,
            jadwal_praktek,
            info_klinik,
            img_dokter,
          },
          { where: { id } }
        );

        res.json({ message: "Doctor updated successfully" });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });
  }

  async deleteDoctorById(req, res) {
    const { id } = req.params;
    try {
      const doctor = await Dokter.findByPk(id);
      if (!doctor) {
        return res.status(404).json({ message: "Doctor not found" });
      }

      await Dokter.destroy({ where: { id } });

      res.json({ message: "Doctor deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

const dokterController = new DokterController();

module.exports = dokterController;
