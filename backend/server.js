const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 5000;

/* El origen que se permitirá acceder a los recursos del servidor a través de CORS
    este recurso es un objeto */
var corsOptions = {
    origin: "http://localhost:8081"
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
        const gamesArr = data.map(game => ({
            title: game.title,
            genre: game.genre,
            release_date: game.release_date,
            thumbnail: game.thumbnail,
            short_description: game.short_description,
            publisher: game.publisher
        }));
        // Limito el número de resultados a 25
        const limitedGames = gamesArr.slice(0, 25);
        
        res.json(limitedGames);
    })
    // 
    .catch(error => {
        console.error("Error al obtener datos de la API:", error);
        res.status(500).json({ error: "No se pudieron obtener los datos de la API." });
    });
});

require("./app/routes/games.routes.js")(app);

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
    })