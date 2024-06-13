const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "project_blueechoarts",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to database.");
});

app.post("/signup", (req, res) => {
  const sql = "INSERT INTO klien (`username`, `email`, `password`) VALUES (?)";
  const values = [req.body.username, req.body.email, req.body.password];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.error("Error executing query: ", err);
      return res.status(500).json("Error");
    }
    return res.status(200).json(data);
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const sql = "SELECT * FROM klien WHERE username = ? AND password = ?";
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (result.length > 0) {
      // User ditemukan, login berhasil
      return res.json("Success");
    } else {
      // Tidak ditemukan user dengan username dan password yang sesuai
      return res.status(401).json("Failed");
    }
  });
});

app.listen(8081, () => {
  console.log("listening");
});
