const db = require("../models");
const Timetable = db.timetable;

class TimetableController {
  async getTimetables(req, res) {
    try {
      const timetables = await Timetable.findAll();
      res.json({ timetable: timetables });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async createTimetable(req, res) {
    try {
      console.log("Request Body:", req.body);
      const { hari, tanggal, mulai_jam, sampai_jam } = req.body;
      // if (!hari || !tanggal || !mulai_jam || !sampai_jam) {
      //   return res.status(400).json({ error: "Semua field harus diisi" });
      // }
      const newTimetable = await Timetable.create({
        // hari: req.body.Hari,
        // tanggal: req.body.Tanggal,
        // mulai_jam: req.body.Mulai_Pukul,
        // sampai_jam: req.body.Sampai_Pukul,
        hari,
        tanggal,
        mulai_jam,
        sampai_jam,
      });
      // res.json({ id: newTimetable.id });
      // res.status(201).json({
      //   message: "Timetable berhasil ditambahkan",
      //   timetable: newTimetable,
      // });
      res.status(201).json(newTimetable);
    } catch (err) {
      console.error("Error inserting data:", err);
      res.status(500).json({ error: err.message });
    }
  }

  async updateTimetable(req, res) {
    const id = req.params.id;
    try {
      const [updatedRows] = await Timetable.update(
        {
          hari: req.body.Hari,
          tanggal: req.body.Tanggal,
          mulai_jam: req.body.Mulai_Pukul,
          sampai_jukul: req.body.Sampai_Pukul,
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

  async deleteTimetable(req, res) {
    const id = req.params.id;
    try {
      const deletedRows = await Timetable.destroy({
        where: { id: id },
      });
      res.json({ rows_affected: deletedRows });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

const object = new TimetableController();

module.exports = object;
