module.exports = (sequelize, Sequelize) => {
  const Artikel = sequelize.define("article", {
    article_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    judul_artikel: {
      type: Sequelize.STRING,
    },
    isi_artikel: {
      type: Sequelize.TEXT,
    },
    tanggal_publikasi: {
      type: Sequelize.DATE,
    },
    penulis: {
      type: Sequelize.STRING,
    },
    gambar_artikel: {
      type: Sequelize.STRING,
    },
  });

  return Artikel;
};
