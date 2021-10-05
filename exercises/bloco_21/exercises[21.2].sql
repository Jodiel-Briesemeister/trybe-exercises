-- Exiba o nome , email , id do endereço , endereço e distrito dos clientes que moram no 
-- distrito da California e que contêm "rene" em seus nomes. As informações podem ser 
-- encontradas nas tabelas address e customer .

SELECT 
    ad.address_id,
    ad.address,
    ad.district,
    CONCAT(c.first_name, ' ', c.last_name) AS 'full name',
    c.email
FROM
    sakila.address AS ad
        INNER JOIN
    sakila.customer AS c ON ad.address_id = c.address_id
WHERE
    ad.district = 'California'
        AND (c.first_name LIKE '%rene%'
        OR c.last_name LIKE '%rene%');

-- Monte uma query que exiba o id do ator , nome , id do filme e título do filme ,  
-- usando as tabelas actor , film_actor e film . Dica: você precisará fazer mais de um JOIN na mesma query.

SELECT 
    f_act.actor_id,
    f_act.film_id,
    CONCAT(act.first_name, ' ', act.last_name) AS 'full name',
    f.title
FROM
    sakila.film_actor AS f_act
        INNER JOIN
    sakila.actor AS act ON f_act.actor_id = act.actor_id
        INNER JOIN
    sakila.film AS f ON f.film_id = f_act.film_id;
    
-- right, left join--
USE sakila;
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM customer AS c
LEFT JOIN actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

-- self join
-- Queremos saber os ids e custos de substituição dos filmes que possuem o mesmo custo de substituição.

SELECT 
    A.film_id, A.replacement_cost, B.film_id, B.replacement_cost
FROM
    sakila.film AS A,
    sakila.film AS B
WHERE
    A.replacement_cost = B.replacement_cost;
    
-- Exiba o título e a duração de empréstimo dos filmes que possuem a mesma duração. 
-- Exiba apenas os filmes com a duração de empréstimo entre 2 e 4 dias.

SELECT 
    A.title, A.rental_duration, B.title, B.rental_duration
FROM
    sakila.film AS A,
    sakila.film AS B
WHERE
    A.rental_duration = B.rental_duration
        AND A.rental_duration BETWEEN 2 AND 4;
        
-- Você quer exibir uma lista paginada com os nomes e sobrenomes de todos os clientes e atores do 
-- banco de dados, em ordem alfabética. Considere que a paginação está sendo feita de 15 em 15 
-- resultados e que você está na 4ª página. Monte uma query que simule esse cenário.

(SELECT 
    first_name, last_name
FROM
    sakila.customer
ORDER BY first_name , last_name
LIMIT 60) UNION (SELECT 
    first_name, last_name
FROM
    sakila.actor
ORDER BY first_name , last_name
LIMIT 60) ORDER BY first_name , last_name LIMIT 15 OFFSET 45;
