const path = require('path');

require('dotenv').config({
  path: path.resolve(__dirname, '../.env'),
});

module.exports = {

  // ─── Development ────────────────────────────────────────────────────────────
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: Number(process.env.DB_PORT),

    logging: false,
  },

  // ─── Test ───────────────────────────────────────────────────────────────────
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_TEST,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: Number(process.env.DB_PORT),

    logging: false,
  },

  // ─── Production ─────────────────────────────────────────────────────────────
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_PROD,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: Number(process.env.DB_PORT),

    logging: false,
  },

};