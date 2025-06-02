var express = require("express");
var router = express.Router();
var dashboardController = require("../controllers/DashboardController");

router.get("/usuario/:idUsuario", dashboardController.listarCorridasUsuario);
router.post("/dashboardController/dados_ultima_corrida", function (req, res) {
    dashboardController.dados_ultima_corrida(req, res);
});

module.exports = router;