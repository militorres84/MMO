const Games = require("../models/games.model.js");

// Crear un guardar un nuevo juego
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
        console.log(res);
    }

    // Crear un juego)
    const games = new Games(req.body); // SIMPLIFICACION DE OBJETO

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