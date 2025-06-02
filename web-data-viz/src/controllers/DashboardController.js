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
        res.status(400).send("Seu email está undefined!");
    } else {

        perfilModel.dados_ultima_corrida(id)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        console.log(resultadoAutenticar)
                        res.json({
                            nome: resultadoAutenticar[0].corrida,
                            dataCorrida: resultadoAutenticar[0].dataCorrida,
                            distancia: resultadoAutenticar[0].distancia,
                            tempo: resultadoAutenticar[0].tempo,
                            qtdCorrida: resultadoAutenticar[0].qtdCorrida,
                        });


                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}
module.exports = {
    dados_ultima_corrida
}

module.exports = {
    listarCorridasUsuario
};