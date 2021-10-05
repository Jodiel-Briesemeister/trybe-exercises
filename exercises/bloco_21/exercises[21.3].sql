-- Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. 
-- Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir 
-- o id do ator ou atriz e a quantidade de filmes em que atuaram.

USE sakila
DELIMITER $$

CREATE PROCEDURE ObterTop10AtoresPopulares()
BEGIN
	SELECT 
		a.actor_id,
		CONCAT(a.first_name, ' ', a.last_name) AS 'name',
		COUNT(*) AS 'filmes'
	FROM
		actor AS a
			INNER JOIN
		film_actor AS f_a ON a.actor_id = f_a.actor_id
	GROUP BY f_a.actor_id
	ORDER BY COUNT(*) DESC
	LIMIT 10;
END $$

DELIMITER ;

-- Test
CALL ObterTop10AtoresPopulares;

-- Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string 
-- e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada.
-- Use as tabelas film , film_category e category para montar essa procedure.
USE sakila
DELIMITER $$

CREATE PROCEDURE ObterFilmesPelaCategoriaSelecionada(IN varcategory VARCHAR(50))
BEGIN
	SELECT f.film_id, f.title, c.category_id, c.name
    FROM film AS f
    INNER JOIN film_category AS f_c
    ON f.film_id = f_c.film_id
    INNER JOIN category AS c
    ON f_c.category_id = c.category_id
    WHERE c.name = varcategory;
END $$
DELIMITER ;

-- Test
CALL ObterFilmesPelaCategoriaSelecionada('Comedy')

-- Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o 
-- cliente está ou não ativo, através de um parâmetro de saída.
USE sakila
DELIMITER $$

CREATE PROCEDURE RetornaClienteEstaAtivo(IN varemail VARCHAR(50), OUT isActive BOOL)
BEGIN
	SELECT active
	FROM customer
	WHERE email = varemail
	INTO isActive;
END $$
DELIMITER ;

-- Test
CALL RetornaClienteEstaAtivo('MARY.SMITH@sakilacustomer.org', @ActiveStatus);
SELECT @ActiveStatus;

-- stored functions

-- Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de 
-- pagamentos feitos até o momento por um determinado customer_id .
USE sakila
DELIMITER $$

CREATE FUNCTION RetornaQuantidadeDePagamentosDoCliente(param_id INT)
RETURNS INT READS SQL DATA
BEGIN
	DECLARE qtd INT;
	SELECT COUNT(*) FROM payment WHERE customer_id = param_id
    INTO qtd;
    RETURN qtd;
END $$
DELIMITER ;

-- Test
SELECT RetornaQuantidadeDePagamentosDoCliente(9);

-- Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme 
-- vinculado ao registro de inventário com esse id.
USE sakila
DELIMITER $$

CREATE FUNCTION RetornaNomeDoFilmePorInventoryId(param_id INT)
RETURNS VARCHAR(100) READS SQL DATA
BEGIN
	DECLARE film_name VARCHAR(100);
	SELECT f.title 
    FROM film as f
    INNER JOIN inventory as i
    ON f.film_id = i.film_id
    WHERE i.inventory_id = param_id
    INTO film_name;
    RETURN film_name;
END $$
DELIMITER ;

-- Test
SELECT RetornaNomeDoFilmePorInventoryId(2);

-- Crie uma function que receba uma determinada categoria de filme em formato de texto 
-- (ex: 'Action' , 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria.
USE sakila
DELIMITER $$

CREATE FUNCTION RetornaQuantidadeDeFilmesDaCategoriaEscolhida(param_category VARCHAR(50))
RETURNS INT READS SQL DATA
BEGIN
	DECLARE qtd INT;
	SELECT COUNT(*)
    FROM film as f
    INNER JOIN film_category as f_c
    ON f.film_id = f_c.film_id
    INNER JOIN category as c
    ON f_c.category_id = c.category_id
    WHERE c.name = param_category
    INTO qtd;
    RETURN qtd;
END $$
DELIMITER ;

-- Test
SELECT RetornaQuantidadeDeFilmesDaCategoriaEscolhida('ACTION');

-- TRIGGERS

CREATE DATABASE IF NOT EXISTS betrybe_automoveis;

USE betrybe_automoveis;

CREATE TABLE carros(
    id_carro INT PRIMARY KEY auto_increment,
    preco DECIMAL(12, 2) NOT NULL DEFAULT 0,
    data_atualizacao DATETIME,
    acao VARCHAR(15),
    disponivel_em_estoque BOOLEAN DEFAULT 0
) engine = InnoDB;

CREATE TABLE log_operacoes(
    operacao_id INT AUTO_INCREMENT PRIMARY KEY,
    tipo_operacao VARCHAR(15) NOT NULL,
    data_ocorrido DATE NOT NULL
) engine = InnoDB;

-- Crie um TRIGGER que, a cada nova inserção feita na tabela carros, 
-- defina o valor da coluna data_atualizacao para o momento do ocorrido, a acao para 'INSERÇÃO' 
-- e a coluna disponivel_em_estoque para 1.
USE betrybe_automoveis;

DELIMITER $$
CREATE TRIGGER trigger_carros_insert
    BEFORE INSERT ON carros
    FOR EACH ROW
BEGIN
    SET NEW.data_atualizacao = NOW(),
        NEW.acao = 'INSERÇÃO',
        NEW.disponivel_em_estoque = 1;
END $$
DELIMITER ;

-- Test
SELECT * FROM betrybe_automoveis.carros;
INSERT INTO carros(id_carro, preco)
VALUES(1, 20.000);
SELECT * FROM betrybe_automoveis.carros;
--

-- Crie um TRIGGER que, a cada atualização feita na tabela carros, 
-- defina o valor da coluna data_atualizacao para o momento do ocorrido e a acao para 'ATUALIZAÇÃO'.
USE betrybe_automoveis;

DELIMITER $$
CREATE TRIGGER trigger_carros_update
    BEFORE UPDATE ON carros
    FOR EACH ROW
BEGIN
    SET NEW.data_atualizacao = NOW(),
        NEW.acao = 'ATUALIZAÇÃO';
END $$
DELIMITER ;

-- Test
SELECT * FROM betrybe_automoveis.carros;
UPDATE carros SET preco = 25.000
WHERE id_carro = 1;
SELECT * FROM betrybe_automoveis.carros;

-- Crie um TRIGGER que, a cada exclusão feita na tabela carros, 
-- envie para a tabela log_operacoes as informações do tipo_operacao como 'EXCLUSÃO' 
-- e a data_ocorrido como o momento da operação.
USE betrybe_automoveis;

DELIMITER $$
CREATE TRIGGER trigger_carros_delete
    BEFORE DELETE ON carros
    FOR EACH ROW
BEGIN
    INSERT INTO log_operacoes(tipo_operacao, data_ocorrido)
    VALUES('EXCLUSÃO', NOW());
END $$
DELIMITER ;

-- Test
SELECT * FROM betrybe_automoveis.carros;
DELETE FROM betrybe_automoveis.carros
WHERE id_carro = 1;
SELECT * FROM betrybe_automoveis.log_operacoes;

-- TRIGGERS PT 2

CREATE DATABASE IF NOT EXISTS BeeMovies;

USE BeeMovies;

CREATE TABLE movies(
    movie_id INT PRIMARY KEY auto_increment,
    ticket_price DECIMAL(12, 2) NOT NULL DEFAULT 0,
    ticket_price_estimation VARCHAR(15),
    release_year YEAR
) engine = InnoDB;

CREATE TABLE movies_logs(
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    movie_id INT NOT NULL,
    executed_action VARCHAR(15) NOT NULL,
    log_date DATE NOT NULL
) engine = InnoDB;

-- Crie um Trigger para INSERT que deve definir o valor do campo release_year da tabela 
-- movies como o ano atual de forma dinâmica, sem haver a necessidade de digitar manualmente o
-- valor do ano. Além disso, crie um outro Trigger para INSERT que adiciona um novo registro 
-- na tabela movies_logs , informando o movie_id do filme que acaba de ser inserido na tabela movies, 
-- a executed_action como 'INSERT' e a log_date como a data atual.
USE BeeMovies;

DELIMITER $$
CREATE TRIGGER trigger_BeeMovies_insert
    BEFORE INSERT ON movies
    FOR EACH ROW
BEGIN
    SET NEW.release_year = YEAR(NOW());
END $$

CREATE TRIGGER trigger_movie_log_insert
    AFTER INSERT ON movies
    FOR EACH ROW
BEGIN
    INSERT INTO movies_logs(movie_id, executed_action, log_date)
    VALUES(NEW.movie_id, 'INSERT', NOW());
END $$

DELIMITER ;

-- Crie um Trigger para UPDATE que, ao receber uma alteração na tabela movies, 
-- deve comparar o valor anterior de ticket_price com o valor sendo inserido nesta atualização. 
-- Caso o valor seja maior que o anterior, insira na coluna ticket_price_estimation o valor 
-- de 'Increasing' . Caso contrário, insira o valor 'Decreasing'. Adicionalmente, 
-- insira um novo registro na tabela movies_logs , contendo informações sobre o registro 
-- alterado ( movie_id , executed_action e log_date ).
USE BeeMovies;

DELIMITER $$
CREATE TRIGGER trigger_movies_update
    BEFORE UPDATE ON movies
    FOR EACH ROW
BEGIN
    SET NEW.ticket_price_estimation = IF(NEW.ticket_price > OLD.ticket_price, 'Increasing', 'Decreasing');
    INSERT INTO movies_logs(movie_id, executed_action, log_date)
    VALUES(NEW.movie_id, 'UPDATE', NOW());
END $$

DELIMITER ;

-- Crie um Trigger na tabela movies que, ao ter algum de seus registros excluídos, 
-- deve enviar uma informação para a tabela movies_logs , onde devem ser guardados a 
-- data da exclusão, a executed_action 'DELETE' e o id do filme excluído.
USE BeeMovies;

DELIMITER $$
CREATE TRIGGER trigger_movies_delete
    BEFORE DELETE ON movies
    FOR EACH ROW
BEGIN
    INSERT INTO movies_logs(log_date, executed_action, movie_id)
    VALUES(NOW(), 'DELETE', OLD.movie_id);
END $$

DELIMITER ;