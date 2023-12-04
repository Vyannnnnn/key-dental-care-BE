-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 04 Des 2023 pada 04.27
-- Versi server: 10.4.25-MariaDB
-- Versi PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbkeydentalapi`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `articles`
--

CREATE TABLE `articles` (
  `article_id` int(11) NOT NULL,
  `judul_artikel` varchar(150) DEFAULT NULL,
  `isi_artikel` text DEFAULT NULL,
  `tanggal_publikasi` date DEFAULT NULL,
  `penulis` varchar(100) DEFAULT NULL,
  `gambar_artikel` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `articles`
--

INSERT INTO `articles` (`article_id`, `judul_artikel`, `isi_artikel`, `tanggal_publikasi`, `penulis`, `gambar_artikel`, `createdAt`, `updatedAt`) VALUES
(1, 'Percobaan Indra', 'Percobaan Indra Isi nya', '2023-11-29', 'Indra', 'indra.jpg', NULL, NULL),
(2, 'eer', 'erere', '2023-11-17', 'reee', '1701244391971-isep.jpeg', NULL, NULL),
(3, 'wsws', 'swws', '2023-11-16', 'sww', '1701244439960-isep.jpeg', NULL, NULL),
(4, 'Tes', 'Tes', '2023-11-30', 'Tes', '1701245105721-Devestie - Zoom BG.jpg', NULL, NULL),
(5, 'hahaha', 'hahah', '2023-11-30', 'hahahhah', '1701247643001-1395213.jpg', NULL, NULL),
(6, 'wdwdeweedwewewd', 'Berikut adalah contoh artikel yang dapat membantu Anda memahami cara menulis artikel yang baik dan benar:\r\n\r\n11 Contoh Teks Artikel serta Langkah-langkah Penulisannya: Artikel ini menjelaskan definisi, ciri, dan jenis teks artikel, serta 11 contoh teks artikel ilmiah dan non-ilmiah yang bisa ditampilkan di media-media massa. Anda juga bisa mengetahui langkah-langkah penulisannya, mulai dari memilih topik, memahami pembaca, memulai menulis, hingga menyunting tulisan.\r\n\r\nContoh Teks Artikel dan Strukturnya: Artikel ini menjelaskan tentang jenis karya tulis yang memiliki tiga struktur, yaitu tesis, argumentasi, dan penegasan ulang. Artikel bisa berisi persuasi atau informasi tambahan untuk pembaca. Lihat contoh teks artikel tentang peregangan sebelum olahraga dan mengapa masih suka.\r\n\r\n10 Contoh Artikel Bahasa Indonesia Lengkap dengan Strukturnya: Artikel ini menunjukkan contoh artikel dengan berbagai tema, seperti komunikasi yang efektif bagi penolak vaksin, dan menjelangi pembaca.', '2023-12-01', 'Tes', '1701328742120-Screenshot (113).png', NULL, NULL),
(7, 'ygsuyagasa', 'sassasas', '2023-12-06', 'sasaasa', '1701439172449-Devestie - Zoom BG.jpg', NULL, NULL),
(8, 'qsqs', 'qsqqs', '2023-12-04', 'sqq', '1701610321123-Devestie - Zoom BG.jpg', '2023-12-03 13:32:01', '2023-12-03 13:32:01'),
(9, 'sqsqssq', 'sqqssqs', '2023-12-01', 'jajajajajaja', '1701610366856-Screenshot (157).png', '2023-12-03 13:32:46', '2023-12-03 13:32:46'),
(10, 'Testing', 'wweew', '2023-12-03', 'ewew', '1701656345809-Rectangle 18816.png', '2023-12-04 02:19:05', '2023-12-04 02:19:05');

-- --------------------------------------------------------

--
-- Struktur dari tabel `carousels`
--

CREATE TABLE `carousels` (
  `carousel_id` int(11) NOT NULL,
  `gambar_iklan` varchar(255) DEFAULT NULL,
  `deskripsi_iklan` text DEFAULT NULL,
  `tautan_iklan` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `chats`
--

CREATE TABLE `chats` (
  `chat_id` int(11) NOT NULL,
  `pengirim_id` int(11) DEFAULT NULL,
  `penerima_id` int(11) DEFAULT NULL,
  `pesan` text DEFAULT NULL,
  `waktu_pengiriman` datetime DEFAULT NULL,
  `lampiran_gambar` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `doctors`
--

CREATE TABLE `doctors` (
  `id` int(11) NOT NULL,
  `nama_dokter` varchar(100) DEFAULT NULL,
  `spesialisasi` varchar(100) DEFAULT NULL,
  `jadwal_praktek` text DEFAULT NULL,
  `info_klinik` varchar(255) NOT NULL,
  `img_dokter` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `doctors`
--

INSERT INTO `doctors` (`id`, `nama_dokter`, `spesialisasi`, `jadwal_praktek`, `info_klinik`, `img_dokter`, `createdAt`, `updatedAt`) VALUES
(5, 'Drg.  Rima Yunita.R', 'Dokter GIgi Umum', 'SENIN s\\d SABTU 16.00 s\\d 21.00 WIB', 'Klinik Gigi, Kota Pariaman, Padang Sumatera Barat', '1701649600156-Rectangle 18816.png', '2023-12-04 00:26:40', '2023-12-04 00:26:40');

-- --------------------------------------------------------

--
-- Struktur dari tabel `locations`
--

CREATE TABLE `locations` (
  `location_id` int(11) NOT NULL,
  `nama_lokasi` varchar(100) DEFAULT NULL,
  `alamat` text DEFAULT NULL,
  `koordinat_geografis` varchar(50) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `notifications`
--

CREATE TABLE `notifications` (
  `notification_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `isi_notifikasi` text DEFAULT NULL,
  `waktu_pengiriman` datetime DEFAULT NULL,
  `status` enum('terkirim','belum terbaca') DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `patients`
--

CREATE TABLE `patients` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `nama` varchar(100) DEFAULT NULL,
  `kode_antrian` varchar(100) DEFAULT NULL,
  `layanan` varchar(255) DEFAULT NULL,
  `nomor_telepon` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `hari_tanggal` varchar(20) DEFAULT NULL,
  `jam_kunjungan` varchar(10) NOT NULL DEFAULT '16.00 WIB',
  `status` varchar(20) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `patients`
--

INSERT INTO `patients` (`id`, `user_id`, `nama`, `kode_antrian`, `layanan`, `nomor_telepon`, `email`, `hari_tanggal`, `jam_kunjungan`, `status`, `createdAt`, `updatedAt`) VALUES
(1, NULL, 'Agus Gak Jadi Haha', 'K-0012', 'Gigi', '28192819', 'sasiaoj', 'Senin', '14.00 WIB', 'Disetujui', '2023-12-04 01:39:34', '2023-12-04 02:58:47'),
(2, NULL, 'Agus Aja haha', 'K-0011', '', NULL, NULL, 'Senin', '16.00 WIB', 'Selesai', '2023-12-04 01:40:14', '2023-12-04 01:47:50'),
(3, NULL, 'Agus Aja haha', 'K-2', '', NULL, NULL, 'Senin', '16.00 WIB', 'Selesai', '2023-12-04 01:40:36', '2023-12-04 01:47:56'),
(4, 1, 'Agus Aja haha', 'K-0010', '', '02038', NULL, 'Senin', '16.00 WIB', 'Selesai', '2023-12-04 01:42:32', '2023-12-04 01:48:14'),
(5, 1, 'Agus Aja haha', 'K-0005', '', '02038', NULL, 'Senin', '16.00 WIB', 'Selesai', '2023-12-04 01:56:09', '2023-12-04 01:58:01'),
(6, 1, 'Agus Aja haha', 'K-0006', '', '02038', NULL, 'Senin', '16.00 WIB', 'Selesai', '2023-12-04 01:56:20', '2023-12-04 01:58:03'),
(7, 1, 'Agus Aja haha', 'K-0007', '', '02038', NULL, 'Senin', '16.00 WIB', 'Disetujui', '2023-12-04 01:56:23', '2023-12-04 01:56:23');

-- --------------------------------------------------------

--
-- Struktur dari tabel `program_datas`
--

CREATE TABLE `program_datas` (
  `id` int(11) NOT NULL,
  `nama_program` varchar(100) DEFAULT NULL,
  `deskripsi_program` text DEFAULT NULL,
  `harga_program` varchar(20) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `program_datas`
--

INSERT INTO `program_datas` (`id`, `nama_program`, `deskripsi_program`, `harga_program`, `thumbnail`, `createdAt`, `updatedAt`) VALUES
(1, 'qs', 'sq', 'sqq', '1701650802585-BG Zoom SIB 5.png', '2023-12-04 00:46:42', '2023-12-04 00:46:42');

-- --------------------------------------------------------

--
-- Struktur dari tabel `queues`
--

CREATE TABLE `queues` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `nama` varchar(255) NOT NULL,
  `kode_antrian` varchar(255) NOT NULL,
  `pelayanan` varchar(255) NOT NULL,
  `no_telepon` varchar(255) NOT NULL,
  `hari_tanggal` varchar(10) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `queues`
--

INSERT INTO `queues` (`id`, `user_id`, `nama`, `kode_antrian`, `pelayanan`, `no_telepon`, `hari_tanggal`, `createdAt`, `updatedAt`) VALUES
(21, 0, 'Agus Sutisna', '0991', 'jasa', '08123', '2021-01-10', '2023-12-03 12:42:55', '2023-12-03 12:43:25'),
(22, NULL, 'Agus Aja haha', 'K-NaN', 'Tambal', '02038', 'Senin', '2023-12-04 01:00:50', '2023-12-04 01:00:50'),
(23, NULL, 'Agus Aja haha', 'NaN', 'Tambal', '02038', 'Senin', '2023-12-04 01:01:24', '2023-12-04 01:01:24'),
(24, NULL, 'Agus Aja haha', '1', 'Tambal', '02038', 'Senin', '2023-12-04 01:02:34', '2023-12-04 01:02:34'),
(25, NULL, 'Agus Aja haha', 'K-1', 'Tambal', '02038', 'Senin', '2023-12-04 01:03:24', '2023-12-04 01:03:24'),
(27, NULL, 'Agus Aja haha', 'K-0003', 'Tambal', '02038', 'Senin', '2023-12-04 01:05:54', '2023-12-04 01:05:54'),
(28, NULL, 'Agus Aja haha', 'K-0004', 'Tambal', '02038', 'Senin', '2023-12-04 01:06:57', '2023-12-04 01:06:57'),
(32, 1, 'Agus Aja haha', 'K-0008', 'Tambal', '02038', 'Senin', '2023-12-04 01:07:00', '2023-12-04 01:07:00'),
(33, 1, 'Agus Aja haha', 'K-0009', 'Tambal', '02038', 'Senin', '2023-12-04 01:07:01', '2023-12-04 01:07:01');

-- --------------------------------------------------------

--
-- Struktur dari tabel `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `roles`
--

INSERT INTO `roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'user', '2023-11-30 12:07:34', '2023-11-30 12:07:34'),
(2, 'dokter', '2023-11-30 12:07:34', '2023-11-30 12:07:34'),
(3, 'admin', '2023-11-30 12:07:34', '2023-11-30 12:07:34');

-- --------------------------------------------------------

--
-- Struktur dari tabel `schedules`
--

CREATE TABLE `schedules` (
  `schedule_id` int(11) NOT NULL,
  `doctor_id` int(11) DEFAULT NULL,
  `hari_kerja` enum('Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu') DEFAULT NULL,
  `jam_mulai` time DEFAULT NULL,
  `jam_selesai` time DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `timetables`
--

CREATE TABLE `timetables` (
  `id` int(11) NOT NULL,
  `hari` varchar(20) NOT NULL,
  `tanggal` varchar(20) NOT NULL,
  `mulai_jam` varchar(5) NOT NULL,
  `sampai_jam` varchar(5) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `timetables`
--

INSERT INTO `timetables` (`id`, `hari`, `tanggal`, `mulai_jam`, `sampai_jam`, `createdAt`, `updatedAt`) VALUES
(3, 'Senin ahhaha', '5001-12-02', '12:00', '14:00', '2023-12-03 13:58:05', '2023-12-03 13:58:54');

-- --------------------------------------------------------

--
-- Struktur dari tabel `treatments`
--

CREATE TABLE `treatments` (
  `treatment_id` int(11) NOT NULL,
  `nama_layanan` varchar(100) DEFAULT NULL,
  `deskripsi` text DEFAULT NULL,
  `harga` decimal(10,2) DEFAULT NULL,
  `keterangan_tambahan` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `profile_photo` varchar(255) DEFAULT NULL,
  `user_type` enum('admin','pasien') DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `phone_number`, `profile_photo`, `user_type`, `createdAt`, `updatedAt`) VALUES
(1, 'Isep Irmansyah', '$2a$08$ITET4Lg6FhXysrZu/Vzz9usgyhexXohtFIS8fwhpuB6G6hLKCbKBm', 'isep@gmail.com', '081299094123', NULL, NULL, '2023-11-30 05:58:41', '2023-11-30 05:58:41'),
(2, 'Isep Irmansyah Alqorni', '$2a$08$x8f9hDpTg72BfHcoVBdAy.u387cdNRMaTMbzUtrdYiLNZKd284pYa', 'isep01@gmail.com', '081299094123', NULL, NULL, '2023-11-30 23:18:15', '2023-11-30 23:18:15'),
(3, 'Jajang', '$2a$08$049dKbuH.UI52jJbmMoWn.XnoXceKzQwyc.eM4GpLSlyCzO1A/Yh6', 'isep@gmail.com', '012980', NULL, NULL, '2023-12-01 07:08:11', '2023-12-01 07:08:11'),
(4, 'Indra Agustini', '$2a$08$lUoCqHfeqAH7J41sN8odgu2AL2EB4SNh8kpiBSbxFru//OrFBTm.q', 'indra@gmail.com', '0812827282', NULL, NULL, '2023-12-01 07:28:20', '2023-12-01 07:28:20'),
(5, 'Testing User', '$2a$08$Y3YUtDbeOa17w9WEPQnZ1Ou1qEZLMffKpRvu6iZD4mxWQftIJhZRe', 'testing@gmail.com', '081299094123', NULL, NULL, '2023-12-01 07:50:23', '2023-12-01 07:50:23'),
(6, 'Jajang', '$2a$08$bDps7.gQiJgyK.4zVMwEu.C0/w3U3fXchcdoa5Udqr4OZEIAmPDx.', 'isep@gmail.com', '012980', NULL, NULL, '2023-12-01 09:57:20', '2023-12-01 09:57:20'),
(7, 'Jajang', '$2a$08$NTcBzSDje1Fw.kNRild8qOtppPu0DiTSXbiUVm4/nLz3xxUB3vx2e', 'isep@gmail.com', '012980', NULL, NULL, '2023-12-01 09:57:25', '2023-12-01 09:57:25'),
(8, 'Jajang', '$2a$08$VdORtWZlC0PG4nQznuXinu2NEtnxs1I.VRpwrWL6E0yt9T0c2GVBa', 'isep@gmail.com', '012980', NULL, NULL, '2023-12-01 09:57:27', '2023-12-01 09:57:27'),
(9, 'Jajang', '$2a$08$8IgMI0AkW.DS8g1cMWw0G.0jDkTYJYTJk9y.ex6.ysqNK6Wk7v6QG', 'isep@gmail.com', '012980', NULL, NULL, '2023-12-01 09:59:59', '2023-12-01 09:59:59'),
(10, 'Jajang', '$2a$08$rvmv7sWEDdOAoirODQG8LOzfVbJktVPmxIkgvc/HvmTA6SAqMhgKi', 'isep@gmail.com', '012980', NULL, NULL, '2023-12-01 10:00:02', '2023-12-01 10:00:02'),
(11, '121', '$2a$08$dhbB7mNjcFh9COabDRZdyessZnyjU2RqqA88DjNF5x4YAIYrlKFke', 'ise6p@gmail.com', '21', NULL, NULL, '2023-12-01 10:07:22', '2023-12-01 10:07:22'),
(12, 'Nova Safira', '$2a$08$dCzbYRdtxvCK8W/U.FS5L.Ywt3EzDZH7CU7AtY26oLLBGQT.Vmfb6', 'nova@gmail.com', '212313', NULL, NULL, '2023-12-01 13:57:02', '2023-12-01 13:57:02'),
(13, 'Rima Yunita', '$2a$08$0gahWL3wZEiJQuoPBN5AbubXvkqXu4ph7tH2DqsFPF1UUY/tAdmZi', 'admin@gmail.com', '081299094123', NULL, NULL, '2023-12-03 23:21:43', '2023-12-03 23:21:43');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user_roles`
--

CREATE TABLE `user_roles` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `roleId` int(11) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user_roles`
--

INSERT INTO `user_roles` (`createdAt`, `updatedAt`, `roleId`, `userId`) VALUES
('2023-11-30 05:58:41', '2023-11-30 05:58:41', 1, 1),
('2023-11-30 23:18:15', '2023-11-30 23:18:15', 1, 2),
('2023-12-01 07:08:11', '2023-12-01 07:08:11', 1, 3),
('2023-12-01 07:28:20', '2023-12-01 07:28:20', 1, 4),
('2023-12-01 07:50:23', '2023-12-01 07:50:23', 1, 5),
('2023-12-01 09:57:20', '2023-12-01 09:57:20', 1, 6),
('2023-12-01 09:57:25', '2023-12-01 09:57:25', 1, 7),
('2023-12-01 09:57:27', '2023-12-01 09:57:27', 1, 8),
('2023-12-01 10:00:00', '2023-12-01 10:00:00', 1, 9),
('2023-12-01 10:00:02', '2023-12-01 10:00:02', 1, 10),
('2023-12-01 10:07:22', '2023-12-01 10:07:22', 1, 11),
('2023-12-01 13:57:02', '2023-12-01 13:57:02', 1, 12),
('2023-12-03 23:21:43', '2023-12-03 23:21:43', 2, 13),
('2023-12-03 23:21:43', '2023-12-03 23:21:43', 3, 13);

-- --------------------------------------------------------

--
-- Struktur dari tabel `visit_data`
--

CREATE TABLE `visit_data` (
  `visit_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `tanggal_kunjungan` date DEFAULT NULL,
  `keterangan_kunjungan` text DEFAULT NULL,
  `status_kunjungan` enum('selesai','tertunda') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`article_id`);

--
-- Indeks untuk tabel `carousels`
--
ALTER TABLE `carousels`
  ADD PRIMARY KEY (`carousel_id`);

--
-- Indeks untuk tabel `chats`
--
ALTER TABLE `chats`
  ADD PRIMARY KEY (`chat_id`),
  ADD KEY `pengirim_id` (`pengirim_id`),
  ADD KEY `penerima_id` (`penerima_id`);

--
-- Indeks untuk tabel `doctors`
--
ALTER TABLE `doctors`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`location_id`);

--
-- Indeks untuk tabel `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`notification_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indeks untuk tabel `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `program_datas`
--
ALTER TABLE `program_datas`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `queues`
--
ALTER TABLE `queues`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `schedules`
--
ALTER TABLE `schedules`
  ADD PRIMARY KEY (`schedule_id`),
  ADD KEY `doctor_id` (`doctor_id`);

--
-- Indeks untuk tabel `timetables`
--
ALTER TABLE `timetables`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `treatments`
--
ALTER TABLE `treatments`
  ADD PRIMARY KEY (`treatment_id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `user_roles`
--
ALTER TABLE `user_roles`
  ADD KEY `roleId` (`roleId`),
  ADD KEY `userId` (`userId`);

--
-- Indeks untuk tabel `visit_data`
--
ALTER TABLE `visit_data`
  ADD PRIMARY KEY (`visit_id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `articles`
--
ALTER TABLE `articles`
  MODIFY `article_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `carousels`
--
ALTER TABLE `carousels`
  MODIFY `carousel_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `chats`
--
ALTER TABLE `chats`
  MODIFY `chat_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `doctors`
--
ALTER TABLE `doctors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `locations`
--
ALTER TABLE `locations`
  MODIFY `location_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `notifications`
--
ALTER TABLE `notifications`
  MODIFY `notification_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `patients`
--
ALTER TABLE `patients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `program_datas`
--
ALTER TABLE `program_datas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `queues`
--
ALTER TABLE `queues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT untuk tabel `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `schedules`
--
ALTER TABLE `schedules`
  MODIFY `schedule_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `timetables`
--
ALTER TABLE `timetables`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `treatments`
--
ALTER TABLE `treatments`
  MODIFY `treatment_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT untuk tabel `visit_data`
--
ALTER TABLE `visit_data`
  MODIFY `visit_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `chats`
--
ALTER TABLE `chats`
  ADD CONSTRAINT `chats_ibfk_1` FOREIGN KEY (`pengirim_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `chats_ibfk_2` FOREIGN KEY (`penerima_id`) REFERENCES `doctors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `notifications_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Ketidakleluasaan untuk tabel `schedules`
--
ALTER TABLE `schedules`
  ADD CONSTRAINT `schedules_ibfk_1` FOREIGN KEY (`doctor_id`) REFERENCES `doctors` (`id`);

--
-- Ketidakleluasaan untuk tabel `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_roles_ibfk_2` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `visit_data`
--
ALTER TABLE `visit_data`
  ADD CONSTRAINT `visit_data_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
