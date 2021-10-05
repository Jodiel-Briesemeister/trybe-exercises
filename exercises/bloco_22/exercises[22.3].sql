-- Crie uma view chamada film_with_categories utilizando as tabelas category, 
-- film_category e film do banco de dados sakila . Essa view deve exibir o título do filme, 
-- o id da categoria e o nome da categoria, conforme a imagem abaixo. Os resultados devem ser 
-- ordenados pelo título do filme.
USE sakila;

CREATE VIEW film_with_categories AS 
SELECT f.title, f_c.category_id, c.name AS 'category'
FROM film f
INNER JOIN film_category f_c ON f.film_id = f_c.film_id
INNER JOIN category c ON f_c.category_id = c.category_id
ORDER BY f.title;

SELECT * FROM film_with_categories;

-- Crie uma view chamada film_info utilizando as tabelas actor , film_actor e film do banco de dados sakila.
-- Sua view deve exibir o actor_id , o nome completo do ator ou da atriz em uma coluna com o 
-- ALIAS actor e o título dos filmes. Os resultados devem ser ordenados pelos nomes de atores e atrizes.
-- Use a imagem a seguir como referência.

CREATE VIEW film_info AS
SELECT a.actor_id, CONCAT(a.first_name, ' ', a.last_name) AS 'actor', f.title
FROM actor AS a
INNER JOIN film_actor AS f_a ON a.actor_id = f_a.actor_id
INNER JOIN film AS f ON f.film_id = f_a.film_id
ORDER BY `actor`;

SELECT * FROM film_info;

-- Crie uma view chamada address_info que faça uso das tabelas address e city do banco de dados sakila.
-- Sua view deve exibir o address_id , o address , o district , o city_id e a city.
-- Os resultados devem ser ordenados pelo nome das cidades. Use a imagem abaixo como referência.

CREATE VIEW address_info AS
SELECT a.address_id, a.address, a.district, c.city_id, c.city
FROM address AS a
INNER JOIN city AS c
ON a.city_id = c.city_id
ORDER BY c.city;

SELECT * FROM address_info;

-- Crie uma view chamada movies_languages , usando as tabelas film e language do banco de dados sakila.
-- Sua view deve exibir o título do filme , o id do idioma e o idioma do filme , como na imagem a seguir.

CREATE VIEW movies_languages AS
SELECT f.title, f.language_id, l.name
FROM film AS f
INNER JOIN language AS l ON f.language_id = l.language_id;

SELECT * FROM movies_languages;

-- Verifique o impacto de um FULLTEXT INDEX na tabela category (banco de dados sakila ), 
-- adicionando-o na coluna name . Após ter adicionado o índice, mensure o custo da query utilizando 
-- o execution plan , como já foi feito em lições anteriores. Após ter criado e mensurado o custo da query, 
-- exclua o índice e mensure novamente esse custo.

CREATE FULLTEXT INDEX category_name_index
ON category (name);

SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');
-- query cost: 0.35

DROP INDEX category_name_index ON category;

SELECT *
FROM sakila.category
WHERE name LIKE '%action%';
-- query cost: 1.85

-- Verifique o impacto de um INDEX na tabela address (banco de dados sakila ) adicionando-o na 
-- coluna postal_code . Após ter adicionado o índice, mensure o custo da query utilizando o execution plan,
-- como já foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e 
-- mensure novamente esse custo.

CREATE INDEX address_postal_code_index
ON address (postal_code);

SELECT *
FROM sakila.address
WHERE postal_code = '36693';
-- query cost: 0.35

DROP INDEX address_postal_code_index ON address;

SELECT *
FROM sakila.address
WHERE postal_code = '36693';
-- query cost: 61.80

-- Escreva uma query SQL para alterar na tabela locations o nome da coluna street_address
-- para address, mantendo o mesmo tipo e tamanho de dados.
USE hr;

SHOW COLUMNS FROM locations;

ALTER TABLE locations
CHANGE COLUMN street_address address VARCHAR(40);

-- Escreva uma query SQL para alterar o nome da coluna region_name para region,
-- mantendo o mesmo tipo e tamanho de dados.
SHOW COLUMNS FROM regions;

ALTER TABLE regions
CHANGE REGION_NAME REGION VARCHAR(25);

-- Escreva uma query SQL para alterar o nome da coluna country_name para country,
-- mantendo o mesmo tipo e tamanho de dados.
SHOW COLUMNS FROM countries;

ALTER TABLE countries
CHANGE COUNTRY_NAME COUNTRY VARCHAR(40);