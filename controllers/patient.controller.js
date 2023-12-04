const db = require("../models");
const Patient = db.patient;

class PatientController {
  async getPatients(req, res) {
    try {
      const patients = await Patient.findAll();
      res.json({ patients: patients });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async createPatient(req, res) {
    try {
      const newPatient = await Patient.create({
        nama: req.body.Nama,
        kode_antrian: req.body.Kode_Antrian,
        layanan: req.body.Pelayanan,
        nomor_telepon: req.body.No_Telepon,
        email,
        hari_tanggal: req.body.Hari_Tanggal,
        jam_kunjungan,
        status: "Disetujui",
      });
      res.json({ id: newPatient.id });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async updatePatient(req, res) {
    const id = req.params.id;
    try {
      const [updatedRows] = await Patient.update(
        {
          nama: req.body.Nama,
          kode_antrian: req.body.Kode_Antrian,
          layanan: req.body.Pelayanan,
          nomor_telepon: req.body.No_Telepon,
          email: req.body.Email,
          hari_tanggal: req.body.Hari_Tanggal,
          jam_kunjungan: req.body.Jam,
          status: "Disetujui",
        },
        {
          where: { id: id },
        }
      );
      res.json({ rows_affected: updatedRows });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async deletePatient(req, res) {
    const id = req.params.id;
    try {
      const deletedRows = await Patient.destroy({
        where: { id: id },
      });
      res.json({ rows_affected: deletedRows });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

const object = new PatientController();

module.exports = object;
