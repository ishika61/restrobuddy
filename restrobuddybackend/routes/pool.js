var mysql = require("mysql2")
var pool = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "1234",
    database: "restrobuddys",
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