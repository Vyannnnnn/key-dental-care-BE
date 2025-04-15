const db = require("../models");
const Queue = db.queue;

class QueueController {
  async getQueues(req, res) {
    try {
      const queues = await Queue.findAll();
      res.json({ queue: queues });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async createQueue(req, res) {
    try {
      const lastQueue = await Queue.findOne({ order: [["id", "DESC"]] });

      let nextQueueNumber = 1;
      if (lastQueue && lastQueue.kode_antrian.startsWith("K-")) {
        const lastQueueNumber = parseInt(lastQueue.kode_antrian.split("-")[1]);
        nextQueueNumber = lastQueueNumber + 1;
      }

      const formattedQueueNumber = `000${nextQueueNumber}`.slice(-4);
      const userId = nextQueueNumber;
      const newQueue = await Queue.create({
        nama: req.body.nama,
        user_id: userId,
        kode_antrian: `K-${formattedQueueNumber}`,
        pelayanan: req.body.pelayanan,
        no_telepon: req.body.no_telepon,
        hari_tanggal: req.body.hari_tanggal,
      });

      res.json({ id: newQueue.id });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async updateQueue(req, res) {
    const id = req.params.id;
    try {
      const [updatedRows] = await Queue.update(
        {
          nama: req.body.Nama,
          kode_antrian: req.body.Kode_Antrian,
          pelayanan: req.body.Pelayanan,
          no_telepon: req.body.No_Telepon,
          hari_tanggal: req.body.Hari_Tanggal,
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

  async deleteQueue(req, res) {
    const id = req.params.id;
    try {
      const deletedRows = await Queue.destroy({
        where: { id: id },
      });
      res.json({ rows_affected: deletedRows });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

const object = new QueueController();

module.exports = object;
