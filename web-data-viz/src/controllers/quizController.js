var quizModel = require("../models/quizModel")

function envioscore(req, res) {   // envia os dados do quiz pro bd
    
    var idUsuario = req.body.idUsuarioServer;
    var pontos = req.body.pontosServer;

    quizModel.envioscore(pontos, idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o Envio! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    envioscore
}