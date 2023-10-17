const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

/* El origen que se permitirá acceder a los recursos del servidor a través de CORS
    este recurso es un objeto */
var corsOptions = {
    origin: "http://localhost:5000"
    };

    app.use(cors(corsOptions));

    app.use(express.json());
    
    app.use(express.urlencoded({ extended: true }));


// Consumo de API MMOBomb
app.get("/", (req, res) => {
    fetch('https://www.mmobomb.com/api1/games?platform=pc')
    .then(response => response.json())
    .then(data => {
        // extraigo solo los datos que necesito, haciendo un mapeo de la api
        const juegosDeseados = data.map(juego => ({
            title: juego.title,
            thumbnail: juego.thumbnail,
            short_description: juego.short_description,
            publisher: juego.publisher
        }));
        // imprimo en pantalla los datos que extraje de la api
        res.json(juegosDeseados);
    })
    // 
    .catch(error => {
        console.error("Error al obtener datos de la API:", error);
        res.status(500).json({ error: "No se pudieron obtener los datos de la API." });
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
    })