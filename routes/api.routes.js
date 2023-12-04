const express = require("express");
const QueueControl = require("../controllers/queue.controller");
const ArtikQu = require("../controllers/artikel.controller");
const TimeTbale = require("../controllers/timetable.controller");
const Program = require("../controllers/program.controller");
const Dashboard = require("../controllers/dashboard.controller");
const Dokter = require("../controllers/dokter.controller");
const Method = require("../controllers/methodquetopatient.controller");
const Patient = require("../controllers/patient.controller");

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
  "/api/get-kunungan-pasien/:user_id",
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

router.get("/api/timetable", TimeTbale.getTimetables);
router.post("/api/timetable", TimeTbale.createTimetable);
router.put("/api/timetable/:id", TimeTbale.updateTimetable);
router.delete("/api/timetable/:id", TimeTbale.deleteTimetable);

router.get("/api/program", Program.getPrograms);
router.post("/api/program", Program.createProgram);
router.put("/api/program/:id", Program.updateProgram);
router.delete("/api/program/:id", Program.deleteProgram);

router.get("/api/dokter", Dokter.getAllDoctors);
router.get("/api/dokter/:id", Dokter.getDoctorById);
router.post("/api/dokter", Dokter.addDoctorWithImage);
router.put("/api/dokter/:id", Dokter.updateDoctorById);
router.delete("/api/dokter/:id", Dokter.deleteDoctorById);

router.get("/api/artic", ArtikQu.getAllArticles);
router.post("/api/artic", ArtikQu.addArticleWithImage);

module.exports = router;
