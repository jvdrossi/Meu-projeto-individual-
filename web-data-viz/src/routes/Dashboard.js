const express = require("express");
const router  = express.Router();
const dashboardController = require("../controllers/DashboardController");

// AGORA sem o “dashboard” duplicado
router.get("/:idUsuario",             dashboardController.listarCorridasUsuario);
router.post("/dadosFeedCorrida",  dashboardController.dadosFeedCorrida);
router.post("/carregarGraficoDistanciaPorData",  dashboardController.carregarGraficoDistanciaPorData);
router.post("/carregarCorridasParaGrafico", function (req, res) {
    dashboardController.carregarCorridasParaGrafico(req, res);
})
router.post("/dados_ultima_corrida", function (req, res) {
    dashboardController.dados_ultima_corrida(req, res);
})

module.exports = router;