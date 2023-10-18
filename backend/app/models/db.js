const mysql = require("mysql2");
const dbConfig = require("../config/db.config.js");

// Crea la conexión a la DB
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// Abre la conexión con MySQL
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;