CREATE DATABASE corrida;

USE corrida;

CREATE TABLE corrida (
idCorrida INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
dtCorrida DATETIME,
distancia DECIMAL (6,2),
tempo TIME,
fkUsuario INT,
CONSTRAINT fkUsuario FOREIGN KEY (fkUsuario)
REFERENCES usuario(idUsuario)
);

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
gênero VARCHAR(45),
dtNasc DATE,
email VARCHAR(45) UNIQUE,
senha VARCHAR(45));

CREATE TABLE quiz (
idQuiz INT PRIMARY KEY AUTO_INCREMENT,
dtCriacao DATETIME,
qtdPergunta INT);

CREATE TABLE perguntas (
idPergunta INT PRIMARY KEY AUTO_INCREMENT,
pergunta VARCHAR(45),
fkQuiz INT,
fkResposta INT,
CONSTRAINT fkPerguntaQuiz FOREIGN KEY (fkResposta)
REFERENCES quiz (idQuiz));

CREATE TABLE respostas (
idResposta INT PRIMARY KEY AUTO_INCREMENT,
respostaUsuario VARCHAR(45),
respostaCerta VARCHAR(45));

CREATE TABLE resultado (
dtResultado DATETIME,
fkQuiz INT,
fkUsuario INT,
CONSTRAINT pkComposta PRIMARY KEY (fkQuiz, fkUsuario),
CONSTRAINT fkResultadoQuiz FOREIGN KEY (fkQuiz)
REFERENCES quiz(idQuiz),
CONSTRAINT fkResultadoUsuario FOREIGN KEY (fkUsuario)
REFERENCES usuario(idUsuario)
);


-- FAZER OS JOIN

