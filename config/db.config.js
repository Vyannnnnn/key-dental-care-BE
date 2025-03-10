require("dotenv").config();

module.exports = {
  USER : process.env.DB_USERNAME || "root",
  PASSWORD : process.env.DB_PASSWORD || "",
  DB : process.env.DB_DATABASE || "kei_dentalcare",
  HOST : process.env.DB_HOST || "127.0.0.1",
  dialect: process.env.DB_DIALECT || "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};


// require("dotenv").config();
// module.exports = {
//   development: {
//     username: process.env.DB_USERNAME || "root",
//     password: process.env.DB_PASSWORD || "",
//     database: process.env.DB_DATABASE || "kei_dentalcare", 
//     host: process.env.DB_HOST || "127.0.0.1",
//     dialect: process.env.DB_DIALECT || "mysql",
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000,
//     },
//   },
//   test: {
//     username: process.env.DB_USERNAME || "root",
//     password: process.env.DB_PASSWORD || "",
//     database: process.env.DB_DATABASE || "kei_dentalcare",
//     host: process.env.DB_HOST || "127.0.0.1",
//     dialect: process.env.DB_DIALECT || "mysql",
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000,
//     },
//   },
//   production: {
//     username: process.env.DB_USERNAME || "root",
//     password: process.env.DB_PASSWORD || "",
//     database: process.env.DB_DATABASE || "kei_dentalcare",
//     host: process.env.DB_HOST || "127.0.0.1",
//     dialect: process.env.DB_DIALECT || "mysql",
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000,
//     },
//   },
// };
