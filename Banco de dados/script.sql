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

SELECT corrida.idCorrida AS id, 
       corrida.nome AS descricao,
       corrida.dtCorrida AS dataCorrida, 
       corrida.distancia AS distancia, 
       corrida.tempo AS tempo
FROM corrida
WHERE fkUsuario = (SELECT idUsuario FROM usuario WHERE email = 'email_do_usuario_aqui') 
ORDER BY dtCorrida DESC
LIMIT 10;
        
        SELECT corrida.nome as corrida,
        corrida.dtCorrida as dataCorrida,
        corrida.distancia as distancia,
        corrida.tempo as tempo,
        COUNT(corrida.idCorrida) as qtdCorrida
        FROM usuario
        JOIN corrida ON corrida.fkUsuario = usuario.idUsuario WHERE fkUsuario = idUsuario GROUP BY corrida.idCorrida ORDER BY corrida.idCorrida DESC LIMIT 1;

-- Usuário, Resultado e Quiz
SELECT * FROM resultado
JOIN usuario ON resultado.fkUsuario = usuario.idUsuario
JOIN quiz ON resultado.fkQuiz = quiz.idQuiz;


-- Quiz, Pergunta e Respostas
SELECT * FROM quiz
JOIN perguntas ON perguntas.fkQuiz = quiz.idQuiz
JOIN respostas ON respostas.fkPergunta = perguntas.idPergunta;




