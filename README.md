# KeyDentalCare_API

### URL API https://keydentalcare.isepwebtim.my.id/

## Authtentikasi

- **POST** `/api/auth/signup`
  - Registrasi User.
- **POST** `/api/auth/signin`
  - Login user & admin.
- **POST** `/api/auth/signout`
  - Logout user

## Dashboard

- **GET** `/api/dashboard`
  - Mengambil statistik dashboard.

## Pindah ke Pasien

- **POST** `/api/move-to-patient/:id`
  - Memindahkan data dari antrian ke pasien berdasarkan ID.

## Perbarui Status Pasien

- **POST** `/api/selesaikan-status/:id`
  - Memperbarui status pasien menjadi "Selesai" berdasarkan ID.

## Riwayat Pasien

- **POST** `/api/get-riwayat-pasien/:user_id`
  - Mengambil riwayat pasien yang telah selesai berdasarkan ID pengguna.

## Kunjungan Pasien

- **POST** `/api/get-kunungan-pasien/:user_id`
  - Mengambil kunjungan pasien yang sudah disetujui berdasarkan ID pengguna.

## Antrian

- **GET** `/api/queue`
  - Mengambil daftar antrian.
- **POST** `/api/queue`
  - Membuat entri antrian baru.
- **PUT** `/api/queue/:id`
  - Memperbarui informasi antrian berdasarkan ID.
- **DELETE** `/api/queue/:id`
  - Menghapus antrian berdasarkan ID.

## Pasien

- **GET** `/api/patient`
  - Mengambil daftar pasien.
- **POST** `/api/patient`
  - Membuat data pasien baru.
- **PUT** `/api/patient/:id`
  - Memperbarui informasi pasien berdasarkan ID.
- **DELETE** `/api/patient/:id`
  - Menghapus data pasien berdasarkan ID.

## Jadwal

- **GET** `/api/timetable`
  - Mengambil daftar jadwal.
- **POST** `/api/timetable`
  - Membuat entri jadwal baru.
- **PUT** `/api/timetable/:id`
  - Memperbarui jadwal berdasarkan ID.
- **DELETE** `/api/timetable/:id`
  - Menghapus jadwal berdasarkan ID.

## Program

- **GET** `/api/program`
  - Mengambil daftar program.
- **POST** `/api/program`
  - Membuat entri program baru.
- **PUT** `/api/program/:id`
  - Memperbarui program berdasarkan ID.
- **DELETE** `/api/program/:id`
  - Menghapus program berdasarkan ID.

## Dokter

- **GET** `/api/dokter`
  - Mengambil daftar dokter.
- **GET** `/api/dokter/:id`
  - Mengambil informasi dokter berdasarkan ID.
- **POST** `/api/dokter`
  - Menambahkan dokter baru dengan gambar.
- **PUT** `/api/dokter/:id`
  - Memperbarui informasi dokter berdasarkan ID.
- **DELETE** `/api/dokter/:id`
  - Menghapus informasi dokter berdasarkan ID.

## Artikel

- **GET** `/api/artic`
  - Mengambil daftar artikel.
- **POST** `/api/artic`
  - Menambahkan artikel dengan gambar.
