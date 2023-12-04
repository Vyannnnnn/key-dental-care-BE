const db = require("../models");
const Artikel = db.artikel;
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

const upload = multer({ storage: storage }).single("gambar_artikel");

class ArtikelController {
  async getAllArticles(req, res) {
    try {
      const articles = await Artikel.findAll();
      res.json({ articles });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async addArticleWithImage(req, res) {
    upload(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: err.message });
      } else if (err) {
        return res.status(500).json({ error: err.message });
      }

      const { judul_artikel, isi_artikel, tanggal_publikasi, penulis } =
        req.body;
      const gambar_artikel = req.file.filename;

      try {
        const newArticle = await Artikel.create({
          judul_artikel,
          isi_artikel,
          tanggal_publikasi,
          penulis,
          gambar_artikel,
        });
        res.json({ id: newArticle.id });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    });
  }
}

const object = new ArtikelController();

module.exports = object;
