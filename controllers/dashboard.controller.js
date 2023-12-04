const db = require("../models");

class DashboardController {
  async getDashboardCounts(req, res) {
    try {
      const queueCount = await db.queue.count();
      const patientCount = await db.patient.count();
      const programCount = await db.program.count();
      const timetableCount = await db.timetable.count();
      const chatCount = await db.chat.count();

      const totalCounts = {
        queue: queueCount,
        patients: patientCount,
        programs: programCount,
        timetable: timetableCount,
        chats: chatCount,
      };

      res.json(totalCounts);
    } catch (error) {
      console.error("Error fetching total counts:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

const object = new DashboardController();

module.exports = object;
