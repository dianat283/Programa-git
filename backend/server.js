const express = require("express");
const cors = require("cors");
const connection = require("./db");
const mysql = require("mysql");


const app = express();
app.use(cors());
app.use(express.json());

// Ruta para obtener usuarios
app.get("/usuarios", (req, res) => {
  connection.query("SELECT * FROM usuarios", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Ruta para registrar usuario
app.post("/registro", (req, res) => {
  const { nombre, email, contraseña } = req.body;
  connection.query(
    "INSERT INTO usuarios (nombre, email, contraseña) VALUES (?, ?, ?)",
    [nombre, email, contraseña],
    (err, result) => {
      if (err) throw err;
      res.json({ message: "Usuario registrado!" });
    }
  );
});

// Ruta para verificar usuario
app.post("/login", (req, res) => {
    const { nombre, contraseña } = req.body;
    const query = "SELECT * FROM usuarios WHERE usuario = ? AND contraseña = ?";
  
    connection.query(query, [nombre, contraseña], (err, results) => {
      if (err) throw err;
  
      if (results.length > 0) {
        res.json({ autenticado: true, mensaje: "Inicio de sesión exitoso!" });
        
      } else {
        res.json({ autenticado: false, mensaje: "Credenciales incorrectas" });
      }
    });
  });
  

app.listen(3001, () => {
  console.log("Servidor corriendo en puerto 3001");
});