const Tutorial = require("../models/games.model.js");

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
    }

    // Create a Tutorial
    const game = new Game({
        title: req.body.title,
        genre: req.body.genre,
        release_date: req.body.release_date,
        thumbnail: req.body.thumbnail,
        short_description: req.body.description,
        publisher: req.body.publisher || false
    });

    // Save Tutorial in the database
    Game.create(game, (err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Tutorial."
        });
                else res.send(data);
    });
};