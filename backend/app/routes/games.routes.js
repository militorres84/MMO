const games = require("../controllers/games.controller.js");

module.exports = app => {
    var router = require("express").Router();

    router.post("/", games.create);
};
