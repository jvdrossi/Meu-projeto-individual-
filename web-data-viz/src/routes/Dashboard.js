var express = require("express");
var router = express.Router();
var dashboardController = require("../controllers/DashboardController");

router.get("/usuario/:idUsuario", dashboardController.listarCorridasUsuario);

module.exports = router;