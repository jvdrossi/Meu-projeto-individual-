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

function dadosFeedCorrida(idUsuario) {
    var instrucaoSql = `
    SELECT * FROM (
    SELECT MAX(c.distancia) AS distancia,
           RANK() OVER(ORDER BY MAX(c.distancia) DESC) AS Ranking_distancia,
           MIN(c.pace) AS min_pace,
           SUM(CASE WHEN c.dtCorrida >= NOW() - INTERVAL 7 DAY THEN c.distancia ELSE 0 END) AS distancia_total_da_semana,
           SUM(CASE WHEN MONTH(c.dtCorrida) = MONTH(NOW()) AND YEAR(c.dtCorrida) = YEAR(NOW()) THEN c.distancia ELSE 0 END) AS distancia_total_do_mes,
           SUM(CASE WHEN YEAR(c.dtCorrida) = YEAR(NOW()) THEN c.distancia ELSE 0 END) AS distancia_total_do_ano,
           SUM(c.distancia) AS distancia_total_da_vida,
           c.fkUsuario
            FROM corrida AS c
            GROUP BY c.fkUsuario
        ) AS ranking_geral WHERE ranking_geral.fkUsuario = ${idUsuario};
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}




module.exports = {
    dados_ultima_corrida,
    buscarCorridasDoUsuario,
    dadosFeedCorrida
};


