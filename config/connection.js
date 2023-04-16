require("dotenv").config();
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);

connection.connect((error) => {
    if (error) {
        console.error("Error connecting to database:", error);
        return;
    }
    console.log("Connected to database");
  });

module.exports = connection;
