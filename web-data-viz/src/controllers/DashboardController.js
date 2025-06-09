var dashboardModel = require("../models/DashboardModel");

function listarCorridasUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    dashboardModel.buscarCorridasDoUsuario(idUsuario)
        .then(resultado => {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhuma corrida encontrada para esse usuário.");
            }
        })
        .catch(erro => {
            console.error("Erro ao buscar corridas: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function dados_ultima_corrida(req, res) {
    var id = req.body.idServer;

    if (id == undefined) {
        res.status(400).send("ID do usuário está undefined!");
    } else {
        dashboardModel.dados_ultima_corrida(id)
            .then(resultado => {
                if (resultado.length == 1) {
                    res.json({
                        nome: resultado[0].corrida,
                        dtCorrida: resultado[0].dataCorrida,
                        distancia: resultado[0].distancia,
                        tempo: resultado[0].tempo,
                        qtdCorrida: resultado[0].qtdCorrida,
                    });
                } else if (resultado.length == 0) {
                    res.status(404).send("Nenhuma corrida encontrada.");
                } else {
                    res.status(500).send("Erro inesperado: mais de uma corrida retornada.");
                }
            })
            .catch(erro => {
                console.error("Erro ao buscar dados da última corrida:", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function dadosFeedCorrida(req, res) {
    var id = req.body.idServer;

    if (id == undefined) {
        res.status(400).send("ID do usuário está undefined!");
    } else {
        dashboardModel.dadosFeedCorrida(id)
            .then(resultado => {
                if (resultado.length == 1) {
                    res.json({
                        distancia_maxima: resultado[0].distancia,
                        posicao_distancia_maxima:resultado[0].Ranking_distancia,
                        min_pace: resultado[0].min_pace,
                        distancia_semana: resultado[0].distancia_total_da_semana,
                        distancia_mes: resultado[0].distancia_total_do_mes,
                        distancia_ano: resultado[0].distancia_total_do_ano,
                        distancia_total: resultado[0].distancia_total_da_vida

                    });
                } else if (resultado.length == 0) {
                    res.status(404).send("Nenhuma corrida encontrada.");
                } else {
                    res.status(500).send("Erro inesperado: mais de uma corrida retornada.");
                }
            })
            .catch(erro => {
                console.error("Erro ao buscar dados da última corrida:", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function carregarCorridasParaGrafico(req, res) {
    var id = req.body.idServer;

    if (!id) {
        return res.status(400).send("ID do usuário está indefinido!");
    }

    dashboardModel.buscarCorridasDoUsuario(id)
        .then(resultado => {
            console.log("Resposta do banco:", resultado); // Verificando se os dados realmente contêm dataCorrida

            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(404).send("Nenhuma corrida encontrada.");
            }
        })
        .catch(erro => {
            console.error("Erro ao buscar dados do gráfico:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function carregarGraficoDistanciaPorData(req, res) {
    var id = req.body.idServer;

    if (!id) {
        return res.status(400).send("ID do usuário está indefinido!");
    }

    dashboardModel.buscarCorridasDoUsuario(id)
        .then(resultado => {
            console.log("Resposta do banco:", resultado); // Verificando se os dados realmente contêm dataCorrida

            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(404).send("Nenhuma corrida encontrada.");
            }
        })
        .catch(erro => {
            console.error("Erro ao buscar dados do gráfico:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}



module.exports = {
    dados_ultima_corrida,
    listarCorridasUsuario,
    dadosFeedCorrida,
    carregarGraficoDistanciaPorData,
    carregarCorridasParaGrafico
};