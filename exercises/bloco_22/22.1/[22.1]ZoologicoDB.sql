DROP DATABASE IF EXISTS zoologico;

CREATE DATABASE zoologico;
USE zoologico;

CREATE TABLE Animal(
  animal_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
  especie VARCHAR(50) NOT NULL,
  sexo VARCHAR(50) NOT NULL,
  idade INT NOT NULL,
  localizacao VARCHAR(50) NOT NULL
);

CREATE TABLE Gerente(
  gerente_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL
);

CREATE TABLE Cuidador(
  cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) NOT NULL,
  gerente_id INT NOT NULL,
  FOREIGN KEY (gerente_id) REFERENCES Gerente (gerente_id)
);

CREATE TABLE Animal_Cuidador(
  animal_id INT,
  cuidador_id INT,
  CONSTRAINT PRIMARY KEY(animal_id, cuidador_id),
  FOREIGN KEY (animal_id) REFERENCES Animal (animal_id),
  FOREIGN KEY (cuidador_id) REFERENCES Cuidador (cuidador_id)
);
