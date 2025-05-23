var CalculadoraModel = require("../models/CalculadoraModel");

function calcular(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idUsuario = req.body.idUsuarioServer;
    var nome = req.body.nome_perfilServer;
    var dtCorrida = req.body.data_perfilServer;
    var distancia = req.body.distancia_perfilServer;
    var tempo = req.body.tempo_perfilServer;

    // Faça as validações dos valores
      if (idUsuario == undefined) {
        res.status(400).send("O id está undefined!");
    } else if (nome == undefined) {
        res.status(400).send("O nome da sua corrida está undefined!");
    } else if (dtCorrida == undefined) {
        res.status(400).send("Sua data da Corrida está undefined!");
    } else if (distancia == undefined) {
        res.status(400).send("Sua distancia está undefined!");
    } else if (tempo == undefined) {
        res.status(400).send("Seu tempo está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        CalculadoraModel.calcular(nome, dtCorrida, distancia, tempo, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    calcular
}