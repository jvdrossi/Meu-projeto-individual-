CREATE DATABASE correr_com_proposito;

USE correr_com_proposito;

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
genero VARCHAR(45),
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
CONSTRAINT fkPerguntaQuiz FOREIGN KEY (fkQuiz)
REFERENCES quiz (idQuiz)); 

CREATE TABLE respostas (
idResposta INT PRIMARY KEY AUTO_INCREMENT,
descricao VARCHAR(200),
resposta TINYINT,
fkPergunta int,
CONSTRAINT fkRespostaPergunta FOREIGN KEY (fkPergunta)
REFERENCES perguntas (idPergunta)); 


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


select * from usuario;


-- FAZER OS JOIN

-- Usuário e Corrida
SELECT * FROM usuario
JOIN corrida ON corrida.fkUsuario = usuario.idUsuario;

SELECT u.nome,
c.nome,
c.dtCorrida,
c.distancia,
c.tempo
FROM usuario AS u
JOIN corrida as c ON c.fkUsuario = u.idUsuario;

-- Usuário, Resultado e Quiz
SELECT * FROM resultado
JOIN usuario ON resultado.fkUsuario = usuario.idUsuario
JOIN quiz ON resultado.fkQuiz = quiz.idQuiz;


-- Quiz, Pergunta e Respostas
SELECT * FROM quiz
JOIN perguntas ON perguntas.fkQuiz = quiz.idQuiz
JOIN respostas ON respostas.fkPergunta = perguntas.idPergunta;




