SELECT * FROM sakila.film;

SELECT 
    film_id,
    title,
    IF(title = 'ACE GOLDFINGER',
        'Já assisti a esse filme',
        'Não conheço o filme') AS 'TEST'
FROM
    sakila.film;
-- -- -- -- -----------
SELECT 
    title,
    rating,
    CASE
        WHEN rating = 'G' THEN 'Livre para todos'
        WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
        ELSE 'Proibido para menores de idade'
    END AS 'Público alvo'
FROM
    sakila.film;
    
SELECT IF(15 MOD 2 = 0, 'Par', 'Ímpar') AS 'Par ou Ímpar';

SELECT 220 DIV 12;

SELECT 220 MOD 12;

SELECT ROUND(15 + (RAND() * 5));

SELECT ROUND(15.7515971, 5);

SELECT FLOOR(39.494);

SELECT CEIL(85.234);

SELECT DATEDIFF('2030-01-20', NOW());

SELECT TIMEDIFF('10:25:45', '11:00:00');

SELECT AVG(length) AS 'Média de Duração',
       MIN(length) AS 'Duração Mínima',
       MAX(length) AS 'Duração Máxima',
       SUM(length) AS 'Tempo de Exibição Total',
       COUNT(*) AS 'Filmes Registrados'
FROM sakila.film;

SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name;

SELECT active, COUNT(*)
FROM sakila.customer
GROUP BY active;

SELECT store_id, active, COUNT(*)
FROM sakila.customer
GROUP BY store_id, active;

SELECT AVG(rental_duration) AS avg_rental_duration, rating
FROM sakila.film
GROUP BY rating
ORDER BY avg_rental_duration DESC;

SELECT district, COUNT(*)
FROM sakila.address
GROUP BY district
ORDER BY COUNT(*) DESC;

SELECT rating, AVG(length) AS 'duração média'
FROM sakila.film
GROUP BY rating
HAVING AVG(length) BETWEEN 115.0 AND 121.50
ORDER BY 'duração média' DESC;

SELECT rating, SUM(replacement_cost) as custo_de_substituicao
FROM sakila.film
GROUP BY rating
HAVING custo_de_substituicao  > 3950.50
ORDER BY custo_de_substituicao;

