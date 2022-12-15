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
	feedback int,
	sugestao varchar(500)
);

CREATE TABLE usuario_sugestao
(
	id_usuario int,
	id_sugestao int,
	feedback int
);

ALTER TABLE sentimento_usuario ADD constraint FK_sentimento_usuario_id_usuario foreign key(id_usuario) references Usuario(id_usuario);
ALTER TABLE sentimento_usuario ADD constraint FK_sentimento_usuario_id_sentimento foreign key(id_sentimento) references Sentimento(id_sentimento);
ALTER TABLE sugestao ADD constraint FK_sugestao_id_usuario_usuario foreign key(id_usuario) references Usuario(id_usuario);
ALTER TABLE usuario_sugestao ADD constraint FK_usuario_sugestao_usuario foreign key(id_usuario) references Usuario(id_usuario);
ALTER TABLE usuario_sugestao ADD constraint FK_usuario_sugestao_sugestao foreign key(id_sugestao) references Sugestao(id_sugestao);

INSERT INTO usuario (nome, email, senha) VALUES ('caio', 'caio@gg.com', crypt('123', gen_salt('bf', 8)));
INSERT INTO usuario (nome, email, senha) VALUES ('fernanda', 'fernanda@gg.com', crypt('fernanda123', gen_salt('bf', 8)));
INSERT INTO usuario (nome, email, senha) VALUES ('gabriel', 'gabriel@gg.com', crypt('123gabriel', gen_salt('bf', 8)));
INSERT INTO usuario (nome, email, senha) VALUES ('gabriela', 'gabriela@gg.com', crypt('gabriela123', gen_salt('bf', 8)));
INSERT INTO usuario (nome, email, senha) VALUES ('guilherme', 'guilherme@gg.com', crypt('guikendji123', gen_salt('bf', 8)));
INSERT INTO usuario (nome, email, senha) VALUES ('gustavo', 'gustavo@gg.com', crypt('gtariga123', gen_salt('bf', 8)));
INSERT INTO usuario (nome, email, senha) VALUES ('henrique', 'henrique@gg.com', crypt('tsuyoshi123', gen_salt('bf', 8)));
INSERT INTO usuario (nome, email, senha) VALUES ('lucas', 'lucas@gg.com', crypt('12345', gen_salt('bf', 8)));

INSERT INTO sentimento (sentimento) VALUES ('bravo');
INSERT INTO sentimento (sentimento) VALUES ('feliz');
INSERT INTO sentimento (sentimento) VALUES ('triste');

INSERT INTO sentimento_usuario (id_usuario, id_sentimento) VALUES (1, 1);
INSERT INTO sentimento_usuario (id_usuario, id_sentimento) VALUES (2, 3);
INSERT INTO sentimento_usuario (id_usuario, id_sentimento) VALUES (3, 2);
INSERT INTO sentimento_usuario (id_usuario, id_sentimento) VALUES (4, 3);
INSERT INTO sentimento_usuario (id_usuario, id_sentimento) VALUES (5, 1);
INSERT INTO sentimento_usuario (id_usuario, id_sentimento) VALUES (6, 2);
INSERT INTO sentimento_usuario (id_usuario, id_sentimento) VALUES (7, 1);
INSERT INTO sentimento_usuario (id_usuario, id_sentimento) VALUES (8, 3);

INSERT INTO sugestao (sugestao, id_usuario, id_sentimento, feedback) VALUES ('procure se distrair mais', 5, 1, -2);
INSERT INTO sugestao (sugestao, id_usuario, id_sentimento, feedback) VALUES ('procure se distrair mais com peixes', 5, 2, 4);
INSERT INTO sugestao (sugestao, id_usuario, id_sentimento, feedback) VALUES ('procure se distrair mais com cachorros', 5, 3, 8);
INSERT INTO sugestao (sugestao, id_usuario, id_sentimento, feedback) VALUES ('Quando estiver triste, converse com seu psicólogo ou amigo sobre o que te deixou com esse sentimento. Aproveite e busque assistir um filme de comédia para ajudar um pouco no humor', 2, 3, 8);

INSERT INTO usuario_sugestao (id_usuario, id_sugestao, feedback) VALUES (1, 1, 1);
INSERT INTO usuario_sugestao (id_usuario, id_sugestao, feedback) VALUES (2, 1, -1);
INSERT INTO usuario_sugestao (id_usuario, id_sugestao, feedback) VALUES (3, 1, -1);
INSERT INTO usuario_sugestao (id_usuario, id_sugestao, feedback) VALUES (4, 1, -1);
INSERT INTO usuario_sugestao (id_usuario, id_sugestao, feedback) VALUES (5, 1, 1);
INSERT INTO usuario_sugestao (id_usuario, id_sugestao, feedback) VALUES (6, 1, 1);
INSERT INTO usuario_sugestao (id_usuario, id_sugestao, feedback) VALUES (7, 1, -1);
INSERT INTO usuario_sugestao (id_usuario, id_sugestao, feedback) VALUES (8, 1, -1);

INSERT INTO usuario_sugestao (id_usuario, id_sugestao, feedback) VALUES (1, 2, 1);
INSERT INTO usuario_sugestao (id_usuario, id_sugestao, feedback) VALUES (2, 2, 1);
INSERT INTO usuario_sugestao (id_usuario, id_sugestao, feedback) VALUES (3, 2, 1);
INSERT INTO usuario_sugestao (id_usuario, id_sugestao, feedback) VALUES (4, 2, -1);
INSERT INTO usuario_sugestao (id_usuario, id_sugestao, feedback) VALUES (5, 2, 1);
INSERT INTO usuario_sugestao (id_usuario, id_sugestao, feedback) VALUES (6, 2, 1);
INSERT INTO usuario_sugestao (id_usuario, id_sugestao, feedback) VALUES (7, 2, 1);
INSERT INTO usuario_sugestao (id_usuario, id_sugestao, feedback) VALUES (8, 2, -1);

INSERT INTO usuario_sugestao (id_usuario, id_sugestao, feedback) VALUES (1, 3, 1);
INSERT INTO usuario_sugestao (id_usuario, id_sugestao, feedback) VALUES (2, 3, 1);
INSERT INTO usuario_sugestao (id_usuario, id_sugestao, feedback) VALUES (3, 3, 1);
INSERT INTO usuario_sugestao (id_usuario, id_sugestao, feedback) VALUES (4, 3, 1);
INSERT INTO usuario_sugestao (id_usuario, id_sugestao, feedback) VALUES (5, 3, 1);
INSERT INTO usuario_sugestao (id_usuario, id_sugestao, feedback) VALUES (6, 3, 1);
INSERT INTO usuario_sugestao (id_usuario, id_sugestao, feedback) VALUES (7, 3, 1);
INSERT INTO usuario_sugestao (id_usuario, id_sugestao, feedback) VALUES (8, 3, 1);

INSERT INTO usuario_sugestao (id_usuario, id_sugestao, feedback) VALUES (1, 4, 1);
INSERT INTO usuario_sugestao (id_usuario, id_sugestao, feedback) VALUES (2, 4, 1);
INSERT INTO usuario_sugestao (id_usuario, id_sugestao, feedback) VALUES (3, 4, 1);
INSERT INTO usuario_sugestao (id_usuario, id_sugestao, feedback) VALUES (4, 4, 1);
INSERT INTO usuario_sugestao (id_usuario, id_sugestao, feedback) VALUES (5, 4, 1);
INSERT INTO usuario_sugestao (id_usuario, id_sugestao, feedback) VALUES (6, 4, 1);
INSERT INTO usuario_sugestao (id_usuario, id_sugestao, feedback) VALUES (7, 4, 1);
INSERT INTO usuario_sugestao (id_usuario, id_sugestao, feedback) VALUES (8, 4, 1);

SELECT * FROM usuario;
SELECT * FROM sentimento;
SELECT * FROM sentimento_usuario;
SELECT * FROM sugestao;
SELECT * FROM usuario_sugestao;
