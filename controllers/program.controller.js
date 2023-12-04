const db = require("../models");
const Program = db.program;
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

const upload = multer({ storage: storage }).single("thumbnail");

class ProgramController {
  async getPrograms(req, res) {
    try {
      const programs = await Program.findAll();
      res.json({ programs: programs });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async createProgram(req, res) {
    upload(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: err.message });
      } else if (err) {
        return res.status(500).json({ error: err.message });
      }

      const { Nama_Program, Harga, Deskripsi } = req.body;
      const thumbnail = req.file.filename;

      try {
        const newProgram = await Program.create({
          nama_program: Nama_Program,
          harga_program: Harga,
          deskripsi_program: Deskripsi,
          thumbnail,
        });
        res.json({ id: newProgram.id });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });
  }

  async updateProgram(req, res) {
    const id = req.params.id;
    try {
      const [updatedRows] = await Program.update(
        {
          nama_program: req.body.Nama_Program,
          harga_program: req.body.Harga,
          deskripsi_program: req.body.Deskripsi,
          thumbnail: req.body.Thumbnail,
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

  async deleteProgram(req, res) {
    const id = req.params.id;
    try {
      const deletedRows = await Program.destroy({
        where: { id: id },
      });
      res.json({ rows_affected: deletedRows });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

const object = new ProgramController();

module.exports = object;
