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

CREATE TABLE resultado (
idResultado INT PRIMARY KEY AUTO_INCREMENT,
dtResultado DATETIME,
pontos INT,
fkUsuario INT,
CONSTRAINT fkResultadoUsuario FOREIGN KEY (fkUsuario)
REFERENCES usuario(idUsuario) 
);  

select * from corrida;
select * from usuario;
select * from resultado;

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




