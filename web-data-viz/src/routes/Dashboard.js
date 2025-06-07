const express = require("express");
const router  = express.Router();
const dashboardController = require("../controllers/DashboardController");

// AGORA sem o “dashboard” duplicado
router.get("/:idUsuario",             dashboardController.listarCorridasUsuario);
router.post("/dados_ultima_corrida",  dashboardController.dados_ultima_corrida);
router.post("/dadosFeedCorrida",  dashboardController.dadosFeedCorrida);


module.exports = router;