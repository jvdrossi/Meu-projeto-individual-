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

var database = require("../database/config")

function dados_ultima_corrida(idUsuario) {
    var instrucaoSql = `
    SELECT
        c.nome as corrida,
        c.dtCorrida as dataCorrida,
        c.distancia as distancia,
        c.tempo as tempo,
        (SELECT COUNT(*) FROM corrida WHERE fkUsuario = ${idUsuario}) as qtdCorrida
        FROM corrida c
    WHERE c.fkUsuario = ${idUsuario}
    ORDER BY c.dtCorrida DESC
    LIMIT 1;
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}




module.exports = {
    dados_ultima_corrida,
    buscarCorridasDoUsuario
};


