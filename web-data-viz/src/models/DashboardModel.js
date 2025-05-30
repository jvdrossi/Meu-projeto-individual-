var database = require("../database/config");

var database = require("../database/config");

function buscarCorridasDoUsuario(idUsuario) {
    var instrucaoSql = `
        SELECT idCorrida AS id, nome AS descricao, dtCorrida, distancia, tempo
        FROM corrida
        WHERE fkUsuario = ${idUsuario}
        ORDER BY dtCorrida DESC
        LIMIT 10;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarCorridasDoUsuario
};
