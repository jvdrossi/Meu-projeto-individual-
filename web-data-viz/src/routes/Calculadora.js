var express = require("express");
var router = express.Router();

var CalculadoraController = require("../controllers/CalculadoraController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/calcular", function (req, res) {
    CalculadoraController.calcular(req, res);
})



module.exports = router;