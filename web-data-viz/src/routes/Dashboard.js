var express = require("express");
var router = express.Router();
var corridaController = require("../controllers/corridaController");

router.get("/usuario/:idUsuario", corridaController.listarCorridasUsuario);

module.exports = router;