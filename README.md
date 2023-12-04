# KeyDentalCare_API

Dashboard
GET /api/dashboard
Mendapatkan informasi statistik dashboard.

Move to Patient
POST /api/move-to-patient/:id
Memindahkan data dari antrian ke pasien berdasarkan ID.

Update Patient Status
POST /api/selesaikan-status/:id
Memperbarui status pasien menjadi selesai berdasarkan ID.

Riwayat Pasien
POST /api/get-riwayat-pasien/:user_id
Mendapatkan riwayat pasien yang telah selesai berdasarkan ID pengguna.

Kunjungan Pasien
POST /api/get-kunungan-pasien/:user_id
Mendapatkan kunjungan pasien yang sudah disetujui berdasarkan ID pengguna.

Antrian
GET /api/queue
Mendapatkan daftar antrian.
POST /api/queue
Membuat antrian baru.
PUT /api/queue/:id
Memperbarui informasi antrian berdasarkan ID.
DELETE /api/queue/:id
Menghapus antrian berdasarkan ID.

Pasien
GET /api/patient
Mendapatkan daftar pasien.
POST /api/patient
Membuat data pasien baru.
PUT /api/patient/:id
Memperbarui informasi pasien berdasarkan ID.
DELETE /api/patient/:id
Menghapus data pasien berdasarkan ID.

Jadwal
GET /api/timetable
Mendapatkan daftar jadwal.
POST /api/timetable
Membuat jadwal baru.
PUT /api/timetable/:id
Memperbarui jadwal berdasarkan ID.
DELETE /api/timetable/:id
Menghapus jadwal berdasarkan ID.

Program
GET /api/program
Mendapatkan daftar program.
POST /api/program
Membuat program baru.
PUT /api/program/:id
Memperbarui program berdasarkan ID.
DELETE /api/program/:id
Menghapus program berdasarkan ID.

Dokter
GET /api/dokter
Mendapatkan daftar dokter.
GET /api/dokter/:id
Mendapatkan informasi dokter berdasarkan ID.
POST /api/dokter
Menambahkan dokter dengan gambar.
PUT /api/dokter/:id
Memperbarui informasi dokter berdasarkan ID.
DELETE /api/dokter/:id
Menghapus informasi dokter berdasarkan ID.

Artikel
GET /api/artic
Mendapatkan daftar artikel.
POST /api/artic
Menambahkan artikel dengan gambar.
