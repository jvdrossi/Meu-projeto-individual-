var corridaModel = require("../models/corridaModel");

function listarCorridasUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    corridaModel.buscarCorridasDoUsuario(idUsuario)
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

module.exports = {
    listarCorridasUsuario
};