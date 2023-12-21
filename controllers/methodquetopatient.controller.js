const db = require("../models");
const Antrian = db.queue;
const Pasien = db.patient;
const Notifikasi = db.notifikasi;

class Method {
  async moveToPatient(req, res) {
    const { id } = req.params;

    try {
      const selectedAntrian = await Antrian.findByPk(id);

      if (!selectedAntrian) {
        return res.status(404).json({ error: "Antrian not found" });
      }

      const newPatient = {
        user_id: selectedAntrian.user_id,
        nama: selectedAntrian.nama,
        kode_antrian: selectedAntrian.kode_antrian,
        layanan: selectedAntrian.pelayanan,
        nomor_telepon: selectedAntrian.no_telepon,
        email: selectedAntrian.email,
        hari_tanggal: selectedAntrian.hari_tanggal,
        jam_kunjungan: "16.00 WIB",
        status: "Disetujui",
      };

      const newNotif = {
        user_id: selectedAntrian.user_id,
        isi_notifikasi:
          "Pendaftaran kamu sudah diterima oleh dokter!\nSilahkan klik untuk melihat nomor antrian!",
        waktu_pengiriman: new Date(),
        status: "Terkirim",
      };

      req.app.get("io").emit("notification", newNotif);

      await Notifikasi.create(newNotif);
      await Pasien.create(newPatient);
      await Antrian.destroy({ where: { id: id } });

      res.json({
        message: "Data moved to Pasien table successfully",
        newPatient,
        newNotif,
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  async updatePatientStatus(req, res) {
    const { id } = req.params;

    try {
      const selectedPasien = await Pasien.findByPk(id);

      if (!selectedPasien) {
        return res.status(404).json({ error: "Pasien not found" });
      }

      await selectedPasien.update({ status: "Selesai" });

      res.json({
        message: "Status updated successfully",
        updatedPasien: selectedPasien,
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getCompletedPatientsByUserId(req, res) {
    const userId = req.params.user_id;

    try {
      const completedPatients = await Pasien.findAll({
        where: {
          user_id: userId,
          status: "Selesai",
        },
      });

      res.json({ completedPatients });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getApprovedPatientsByUserId(req, res) {
    const userId = req.params.user_id;

    try {
      const approvedPatients = await Pasien.findOne({
        where: {
          user_id: userId,
          status: "Disetujui",
        },
        order: [["createdAt", "DESC"]],
      });

      res.json({ approvedPatients });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

const object = new Method();

module.exports = object;
