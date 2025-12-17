var mysql = require("mysql2")
var pool = mysql.createPool({
    host: "r1bk9t.h.filess.io",
    port: 61002,
    user: "Restrobuddy_ropethemby",
    password: "f56fa0a700dfa072c7bfb6d21da48e6d170d58e9",
    database: "Restrobuddy_ropethemby",
    multipleStatements: true,
    connectionLimit: 100,
})

pool.getConnection((err, connection) => {
  if (err) {
    console.log("❌ MySQL Connection Failed:", err);
  } else {
    console.log("✅ MySQL Connected Successfully!");
    connection.release();
  }
});

module.exports = pool;