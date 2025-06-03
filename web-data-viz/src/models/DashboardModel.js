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
        SELECT corrida.nome as corrida,
        corrida.dtCorrida as dataCorrida,
        corrida.distancia as distancia,
        corrida.tempo as tempo,
        COUNT(corrida.idCorrida) as qtdCorrida
        FROM usuario
        JOIN corrida ON corrida.fkUsuario = usuario.idUsuario WHERE fkUsuario = ${idUsuario} GROUP BY corrida.idCorrida ORDER BY corrida.idCorrida DESC LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}




module.exports = {
    dados_ultima_corrida,
    buscarCorridasDoUsuario
};


