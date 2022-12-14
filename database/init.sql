CREATE EXTENSION pgcrypto;

CREATE TABLE usuario
(
	id_usuario serial primary key,
	nome varchar(50),
	email varchar(50),
	senha char(60)
);

CREATE TABLE sentimento
(
	id_sentimento serial primary key,
	sentimento varchar(30)
);

CREATE TABLE sentimento_usuario
(
	id_usuario int,
	id_sentimento int
);

CREATE TABLE sugestao
(
	id_sugestao serial primary key,
	id_usuario int,
	id_sentimento int,
	sugestao varchar(500)
);

ALTER TABLE sentimento_usuario ADD constraint FK_sentimento_usuario_id_usuario foreign key(id_usuario) references Usuario(id_usuario);
ALTER TABLE sentimento_usuario ADD constraint FK_sentimento_usuario_id_sentimento foreign key(id_sentimento) references Sentimento(id_sentimento);
ALTER TABLE sugestao ADD constraint FK_sugestao_id_usuario_usuario foreign key(id_usuario) references Usuario(id_usuario);


INSERT INTO usuario (nome, email, senha) VALUES ('caio', 'caio@gg.com', crypt('123', gen_salt('bf', 8)));
INSERT INTO usuario (nome, email, senha) VALUES ('lucas', 'lucas@gg.com', crypt('12345', gen_salt('bf', 8)));

INSERT INTO sentimento (sentimento) VALUES ('alegria');
INSERT INTO sentimento (sentimento) VALUES ('tristeza');
INSERT INTO sentimento (sentimento) VALUES ('medo');

INSERT INTO sentimento_usuario (id_usuario, id_sentimento) VALUES (1, 2);
INSERT INTO sentimento_usuario (id_usuario, id_sentimento) VALUES (2, 1);
INSERT INTO sentimento_usuario (id_usuario, id_sentimento) VALUES (1, 3);

INSERT INTO sugestao (sugestao, id_usuario, id_sentimento) VALUES ('procure se distrair mais', 1, 1);
INSERT INTO sugestao (sugestao, id_usuario, id_sentimento) VALUES ('procure se distrair mais com peixes', 2, 2);
INSERT INTO sugestao (sugestao, id_usuario, id_sentimento) VALUES ('procure se distrair mais com cachorros', 1, 2);

SELECT * FROM usuario;
SELECT * FROM sentimento;
SELECT * FROM sentimento_usuario;
SELECT * FROM sugestao;
