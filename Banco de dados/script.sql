CREATE DATABASE correr_com_proposito; 

USE correr_com_proposito;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
genero VARCHAR(45),
dtNasc DATE,
email VARCHAR(45) UNIQUE,
senha VARCHAR(45));

CREATE TABLE corrida (
idCorrida INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
dtCorrida DATE,
distancia DECIMAL (6,2),
tempo TIME,
pace TIME,
fkUsuario INT,
CONSTRAINT fkUsuario FOREIGN KEY (fkUsuario)
REFERENCES usuario(idUsuario)
); 

CREATE TABLE resultado (
idResultado INT PRIMARY KEY AUTO_INCREMENT,
dtResultado DATETIME,
pontos INT,
fkUsuario INT,
CONSTRAINT fkResultadoUsuario FOREIGN KEY (fkUsuario)
REFERENCES usuario(idUsuario) 
);  
SELECT TIME_FORMAT(pace, '%i:%s') AS tempo_formatado FROM corrida;

select * from usuario;
select * from corrida ORDER BY dtCorrida DESC limit 10;

select * from usuario;
select * from corrida;
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


-- KPIs do Right-panel
SELECT * FROM (
    SELECT MAX(c.distancia) AS distancia,
           RANK() OVER(ORDER BY MAX(c.distancia) DESC) AS Ranking_distancia,
           MIN(c.pace) AS min_pace,
           SUM(CASE WHEN MONTH(c.dtCorrida) = MONTH(NOW()) AND YEAR(c.dtCorrida) = YEAR(NOW()) THEN c.distancia ELSE 0 END) AS distancia_total_do_mes,
           SUM(CASE WHEN WEEK(c.dtCorrida, 1) = WEEK(NOW(), 1) AND YEAR(c.dtCorrida) = YEAR(NOW()) THEN c.distancia ELSE 0 END) AS distancia_total_da_semana,
           SUM(CASE WHEN YEAR(c.dtCorrida) = YEAR(NOW()) THEN c.distancia ELSE 0 END) AS distancia_total_do_ano,
           SUM(c.distancia) AS distancia_total_da_vida,
           c.fkUsuario
    FROM corrida AS c
    GROUP BY c.fkUsuario
) AS ranking_geral WHERE ranking_geral.fkUsuario = 7;

-- Usuário, Resultado e Quiz
SELECT * FROM resultado
JOIN usuario ON resultado.fkUsuario = usuario.idUsuario
JOIN quiz ON resultado.fkQuiz = quiz.idQuiz;


-- Quiz, Pergunta e Respostas
SELECT * FROM quiz
JOIN perguntas ON perguntas.fkQuiz = quiz.idQuiz
JOIN respostas ON respostas.fkPergunta = perguntas.idPergunta;





