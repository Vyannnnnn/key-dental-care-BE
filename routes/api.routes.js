const express = require("express");
const QueueControl = require("../controllers/queue.controller");
const ArtikQu = require("../controllers/artikel.controller");
const TimeTable = require("../controllers/timetable.controller");
const Program = require("../controllers/program.controller");
const Dashboard = require("../controllers/dashboard.controller");
const Dokter = require("../controllers/dokter.controller");
const Method = require("../controllers/methodquetopatient.controller");
const Patient = require("../controllers/patient.controller");
const User = require("../controllers/usermethod.controller");
const RekamMedis = require("../controllers/rekammedis.controller");
const Treatment = require("../controllers/tritment.controller");
const Notifikasi = require("../controllers/notifikasi.controller");
const Chat = require("../controllers/chat.controller");
const { authJwt } = require("../middleware");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello Apps In Ready Guys");
});

router.get("/api/dashboard", Dashboard.getDashboardCounts);

router.post("/api/move-to-patient/:id", Method.moveToPatient);
router.post("/api/selesaikan-status/:id", Method.updatePatientStatus);
router.post(
  "/api/get-riwayat-pasien/:user_id",
  Method.getCompletedPatientsByUserId
);
router.post(
  "/api/get-kunjungan-pasien/:user_id",
  Method.getApprovedPatientsByUserId
);

router.get("/api/queue", QueueControl.getQueues);
router.post("/api/queue", QueueControl.createQueue);
router.put("/api/queue/:id", QueueControl.updateQueue);
router.delete("/api/queue/:id", QueueControl.deleteQueue);

router.get("/api/patient", Patient.getPatients);
router.post("/api/patient", Patient.createPatient);
router.put("/api/patient/:id", Patient.updatePatient);
router.delete("/api/patient/:id", Patient.deletePatient);

router.get("/api/timetable", TimeTable.getTimetables);
router.post("/api/timetable", TimeTable.createTimetable);
router.put("/api/timetable/:id", TimeTable.updateTimetable);
router.delete("/api/timetable/:id", TimeTable.deleteTimetable);

router.get("/api/program", [authJwt.verifyToken], Program.getPrograms);
router.post("/api/program", Program.createProgram);
router.put("/api/program/:id", Program.updateProgram);
router.delete("/api/program/:id", Program.deleteProgram);

router.get("/api/dokter", Dokter.getAllDoctors);
router.get("/api/dokter/:id", Dokter.getDoctorById);
router.post("/api/dokter", Dokter.addDoctorWithImage);
router.put("/api/dokter/:id", Dokter.updateDoctorById);
router.delete("/api/dokter/:id", Dokter.deleteDoctorById);

router.get("/api/user", User.getAllUsers);
router.get("/api/user/:id", User.getUserById);
router.put("/api/user/:id", User.updateUserById);
router.delete("/api/user/:id", User.deleteUserById);

router.get("/api/rekam-medis", RekamMedis.getAllRekamMedis);
router.post("/api/rekam-medis", RekamMedis.createRekamMedis);
router.get("/api/rekam-medis/:id", RekamMedis.getRekamMedisById);
router.put("/api/rekam-medis/:id", RekamMedis.updateRekamMedis);
router.delete("/api/rekam-medis/:id", RekamMedis.deleteRekamMedis);
router.get(
  "/api/rekam-medis/pasien/:pasien_id",
  RekamMedis.getRekamMedisByPasienId
);

router.post("/api/treatment", Treatment.createTreatment);
router.get("/api/treatment", Treatment.getAllTreatments);
router.get("/api/treatment/:id", Treatment.getTreatmentById);
router.put("/api/treatment/:id", Treatment.updateTreatmentById);
router.delete("/api/treatment/:id", Treatment.deleteTreatmentById);
router.get("/api/treatment/user/:user_id", Treatment.getTreatmentsByUserId);

router.get("/api/notifikasi/user/:user_id", Notifikasi.getNotifikasiByUserId);

router.get("/api/chat/:receiverId", Chat.getChatHistory);
router.post("/api/chat/:receiverId", Chat.createChatMessage);

router.get("/api/artic", ArtikQu.getAllArticles);
router.post("/api/artic", ArtikQu.addArticleWithImage);

module.exports = router;
