const games = require("../controllers/games.controller.js");
const router = require("express").Router();

router.post("/", games.create); // RUTA PREDETERMINADA
module.exports = router // EXPORTACION MODULO DE RUTAS