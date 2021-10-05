DROP DATABASE IF EXISTS boteco;

CREATE DATABASE boteco;
USE boteco;

CREATE TABLE clientes(
  cliente_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50)
);

INSERT INTO clientes(nome)
VALUES('Batman');

CREATE TABLE produtos(
  produto_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50),
  preco INT
);

INSERT INTO produtos(nome, preco)
VALUES('coxinha', 5.00),
  ('empada', 5.00),
  ('Suco 300ml', 3.00);

CREATE TABLE pagamento(
  pagamento_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50)
);

INSERT INTO pagamento(nome)
VALUES ('debito');

CREATE TABLE pedidos(
  pedido_id INT PRIMARY KEY AUTO_INCREMENT,
  cliente_id INT,
  pagamento_id INT,
  FOREIGN KEY (cliente_id) REFERENCES clientes (cliente_id),
  FOREIGN KEY (pagamento_id) REFERENCES pagamento (pagamento_id)
);

CREATE TABLE pedidos_detalhes(
  pedidos_detalhes_id INT PRIMARY KEY AUTO_INCREMENT,
  pedido_id INT,
  produto_id INT,
  quantidade INT,
  FOREIGN KEY (produto_id) REFERENCES produtos (produto_id),
  FOREIGN KEY (pedido_id) REFERENCES pedidos (pedido_id)
);

INSERT INTO pedidos(pedido_id, produto_id, cliente_id, pagamento_id)
VALUES (1, 1, 1, 1);

INSERT INTO pedidos_detalhes(pedido_id, produto_id, quantidade)
VALUES(1, 1, 4),
(1, 2, 3);


