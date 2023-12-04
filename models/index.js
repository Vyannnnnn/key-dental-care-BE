const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.queue = require("../models/queue.model.js")(sequelize, Sequelize);
db.program = require("../models/program.model.js")(sequelize, Sequelize);
db.patient = require("../models/patient.model.js")(sequelize, Sequelize);
db.timetable = require("../models/timetable.model.js")(sequelize, Sequelize);
db.artikel = require("./artikel.model.js")(sequelize, Sequelize);
db.chat = require("../models/chat.model.js")(sequelize, Sequelize);
db.dokter = require("../models/dokter.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
});

db.ROLES = ["user", "dokter", "admin"];

module.exports = db;
