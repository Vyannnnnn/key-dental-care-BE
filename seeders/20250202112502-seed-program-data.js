"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("program_datas", [
      {
        nama_program: "Perawatan Gigi Dasar",
        deskripsi_program: "Pembersihan karang gigi dan pemeriksaan rutin.",
        harga_program: "250000",
        thumbnail: "perawatan_gigi_dasar.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_program: "Pemasangan Behel",
        deskripsi_program: "Perawatan ortodonti dengan pemasangan behel.",
        harga_program: "5000000",
        thumbnail: "pemasangan_behel.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_program: "Tambal Gigi",
        deskripsi_program: "Menutup lubang pada gigi akibat kerusakan.",
        harga_program: "300000",
        thumbnail: "tambal_gigi.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("program_datas", null, {});
  },
};
