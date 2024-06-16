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

// Endpoint to get all jasa keahlian
app.get("/illustration/:category", (req, res) => {
  const category = req.params.category;
  const sql = `SELECT jk.NoJasa, jk.NamaJenisJasa, sn.username, p.Nama
  FROM jasakeahlian jk JOIN seniman sn ON jk.NoSeniman = sn.NoSeniman
  JOIN portofolio p ON p.NoJasa = jk.NoJasa
  JOIN jenislayananjasaseni jl ON jk.NoJenisJasa = jl.NoJenisJasa
  WHERE jl.NamaJenisJasa = ?`;
  db.query(sql, [category], (err, result) => {
    if (err) {
      console.error("Error executing query: ", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.status(200).json(result);
  });
});

// Endpoint to get a specific jasa keahlian by NoJasa
app.get("/order-page/:NoJasa", (req, res) => {
  const { NoJasa } = req.params;
  const sql = `SELECT jk.NoJasa, jk.Keterangan, jk.NamaJenisJasa, jk.Harga, jk.Revisi AS revision, jk.Pengiriman AS delivery, sn.username, p.Nama, p.Keterangan AS KeteranganPortofolio
  FROM jasakeahlian jk 
  JOIN seniman sn ON jk.NoSeniman = sn.NoSeniman
  JOIN portofolio p ON p.NoJasa = jk.NoJasa
  WHERE jk.NoJasa = ?`;
  db.query(sql, [NoJasa], (err, result) => {
    if (err) {
      console.error("Error executing query: ", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.status(200).json(result);
  });
});

app.get("/client/:username", (req, res) => {
  const username = req.params.username;
  const sql = `SELECT * FROM klien WHERE username = ?`;
  db.query(sql, [username], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (result.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    const client = result[0];
    return res.status(200).json(client);
  });
});

app.post("/order", (req, res) => {
  const { NoJasa, NoKlien, TanggalPesan, Keterangan } = req.body;

  const sql = "INSERT INTO pesanan (`NoJasa`, `NoKlien`, `TanggalPesan`, `Keterangan`) VALUES (?)";
  const values = [NoJasa, NoKlien, TanggalPesan, Keterangan];

  db.query(sql, [values], (err, result) => {
    if (err) {
      console.error("Error inserting order:", err);
      return res.status(500).json({ error: "Error" });
    }
    return res.status(200).json(result);
  });
});

app.listen(8081, () => {
  console.log("listening");
});
