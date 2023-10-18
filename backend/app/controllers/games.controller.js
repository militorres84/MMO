const Tutorial = require("../models/games.model.js");

// Crear un guardar un nuevo juego
exports.create = (req, res) => {
    console.log(req);
    // Validate request
    if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
    }

    // Crear un juego
    const games = new Game({
        title: req.body.title,
        genre: req.body.genre,
        release_date: req.body.release_date,
        thumbnail: req.body.thumbnail,
        short_description: req.body.description,
        publisher: req.body.publisher || false
    });

    // Guardar el juego en la db
    Games.create(games, (err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Tutorial."
        });
                else res.send(data);
    });
};