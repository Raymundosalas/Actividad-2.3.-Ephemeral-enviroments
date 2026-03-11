const express = require("express");
const app = express();

// Puerto que usa Heroku o puerto local
const PORT = process.env.PORT || 3000;

// Ruta principal
app.get("/", (req, res) => {
    res.send("Hola mundo desde mi aplicación Node.js desplegada en Heroku 🚀");
});

// Ruta adicional de prueba
app.get("/about", (req, res) => {
    res.send("Esta es una aplicación simple creada para demostrar un deployment en Heroku.");
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
