DROP SCHEMA IF EXISTS Pixar;
CREATE SCHEMA Pixar;
USE Pixar;

CREATE TABLE Theater (
  id INTEGER auto_increment PRIMARY KEY NOT NULL,
  name VARCHAR(30) NOT NULL,
  location VARCHAR(30) NULL
);

CREATE TABLE Movies (
  id INTEGER auto_increment PRIMARY KEY NOT NULL,
  title VARCHAR(30) NOT NULL,
  director VARCHAR(30) NULL,
  year INT NOT NULL,
  length_minutes INT NOT NULL,
  theater_id INTEGER,
  FOREIGN KEY (theater_id) REFERENCES Theater (id)
);

CREATE TABLE BoxOffice (
  movie_id INTEGER,
  FOREIGN KEY (movie_id) REFERENCES Movies (id),
  rating DECIMAL(2,1) NOT NULL,
  domestic_sales INT NOT NULL,
  international_sales INT NOT NULL

);

INSERT INTO Theater(name, location)
    VALUES ('Cinemark', 'São Paulo'),
            ('Brodway theater', 'Nova York'),
            ('Phoenix theater', 'Londres'),
            ('Le Champo', 'Paris'),
            ('TLC Chinese Theater', 'Los Angeles'),
            ('Regal Tikahtnu', 'Alaska');

INSERT INTO Movies(title, director, year, length_minutes, theater_id)
  VALUES ('Toy Story', 'John Lasseter', 1995, 81, 1),
         ('Vida de inseto', 'Andrew Staton', 1998, 95, 3),
         ('Ratatuille', 'Brad Bird', 2010, 115, NULL),
         ('UP', 'Pete Docter', 2009, 101, 2),
         ('Carros', 'John Lasseter', 2006, 117, NULL),
         ('Toy Story 2', 'John Lasseter', 1999, 93, 5),
         ('Valente', 'Brenda Chapman', 2012, 98, NULL),
         ('Monstros SA', 'Pete Docter', 2001, 92, NULL),
         ('Procurando Nemo', 'Jon Lasseter', 2003, 107, 4),
         ('Os Incríveis', 'Brad Bird', 2004, 116, NULL),
         ('WALL-E', 'Pete Docter', 2008, 104, NULL);


INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
  VALUES (1, 8.3, 190000000, 170000000),
         (2, 7.2, 160000000, 200600000),
         (3, 7.9, 245000000, 239000000),
         (4, 6.1, 330000000, 540000000),
         (5, 7.8, 140000000, 310000000),
         (6, 5.8, 540000000, 600000000),
         (7, 7.5, 250000000, 190000000),
         (8, 8.5, 300000000, 250000000),
         (10, 7.4, 460000000, 510000000),
         (9, 6.8, 450000000, 370000000),
         (11, 9.9, 290000000, 280000000);
         
-- EXERCISES

USE Pixar;

SELECT * FROM Pixar.Movies;
SELECT * FROM BoxOffice;
SELECT * FROM Theater;

-- Exercício 1: Utilizando o INNER JOIN, encontre as vendas nacionais ( domestic_sales ) e 
-- internacionais ( internationa_sales ) de cada filme.
SELECT m.title, b.domestic_sales, b.international_sales
FROM Pixar.Movies as m
INNER JOIN BoxOffice as b
ON m.id = b.movie_id;
-- Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada 
-- filme que possui um número maior de vendas internacionais ( internationa_sales ) 
-- do que vendas nacionais ( domestic_sales ).
SELECT m.title, b.domestic_sales, b.international_sales
FROM Pixar.Movies as m
INNER JOIN BoxOffice as b
ON m.id = b.movie_id
WHERE b.international_sales > b.domestic_sales;
-- Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação ( rating )
-- em ordem decrescente.
SELECT m.title, b.rating
FROM Pixar.Movies as m
INNER JOIN BoxOffice as b
ON m.id = b.movie_id
ORDER BY b.rating DESC;
-- Exercício 4: Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, 
-- mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão 
-- em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT t.*, m.title
FROM Pixar.Theater as t 
LEFT JOIN Pixar.Movies as m
ON m.theater_id = t.id
ORDER BY t.name; 
-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, 
-- mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas 
-- que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT t.*, m.title
FROM Pixar.Theater as t 
RIGHT JOIN Pixar.Movies as m
ON m.theater_id = t.id
ORDER BY t.name;
-- Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN, 
-- que retornem os títulos dos filmes que possuem avaliação maior que 7.5.

-- Com inner join:
SELECT m.title, b.rating
FROM Pixar.Movies as m
INNER JOIN Pixar.BoxOffice as b
ON b.movie_id = m.id
WHERE b.rating > 7.5;

-- Com subquery:
SELECT title
FROM Pixar.Movies WHERE id IN (
	SELECT movie_id FROM BoxOffice WHERE rating > 7.5
);
-- Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN, 
-- que retornem as avaliações dos filmes lançados depois de 2009.

-- subquery
SELECT rating 
FROM Pixar.BoxOffice
WHERE movie_id IN (
	SELECT id FROM Pixar.Movies WHERE year > 2009
);

-- inner join
SELECT b.rating
FROM Pixar.BoxOffice as b
INNER JOIN Pixar.Movies as m
ON m.id = b.movie_id
WHERE m.year > 2009;
-- Exercício 8: Utilizando o EXISTS, selecione o nome e localização dos cinemas 
-- que possuem filmes em cartaz.
SELECT t.name, t.location
FROM Pixar.Theater as t
WHERE EXISTS (
	SELECT * FROM Movies AS m 
    WHERE m.theater_id = t.id
);
-- Exercício 9: Utilizando o EXISTS, selecione o nome e localização dos 
-- cinemas que não possuem filmes em cartaz.
SELECT t.name, t.location
FROM Pixar.Theater as t
WHERE NOT EXISTS (
	SELECT * FROM Movies AS m 
    WHERE m.theater_id = t.id
);
-- Exercício 10: Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação maior que 8.
SELECT m.* 
FROM Pixar.Movies as m
INNER JOIN BoxOffice as b
ON b.movie_id = m.id
WHERE b.rating > 8;
-- Exercício 11: Utilizando o SELF JOIN , selecione os títulos e duração dos filmes que possuem o mesmo diretor.
SELECT t1.title, t1.length_minutes
FROM Pixar.Movies as t1, Pixar.Movies as t2
WHERE t1.director = t2.director
AND t1.title <> t2.title;
-- Exercício 12: Faça duas buscas, uma utilizando SUBQUERY e outra 
-- utilizando INNER JOIN , que retornem o título dos filmes que arrecadaram 500 milhões ou mais,
-- e que possuem duração maior que 110 minutos.

-- inner join:
SELECT m.title
FROM Pixar.Movies as m
INNER JOIN Pixar.BoxOffice as b
ON b.movie_id = m.id
WHERE b.international_sales >= 500000000
AND m.length_minutes > 110;

-- subquery: 

SELECT m.title
FROM Pixar.Movies AS m
WHERE m.id IN (
 SELECT b.movie_id
 FROM Pixar.BoxOffice as b
 WHERE b.international_sales >= 500000000
 AND m.length_minutes > 110
);
