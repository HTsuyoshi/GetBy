create table usuario
(
	id_usuario serial primary key,
	nome varchar(50),
	email varchar(50),
	senha varchar(10)
);

create table sentimento
(
	id_sentimento serial primary key,
	sentimento varchar(30)
);

create table sentimento_usuario
(
	id_usuario int,
	id_sentimento int
);

create table sugestao
(
	id_sugestao serial primary key,
	id_usuario int,
	id_sentimento int,
	sugestao varchar(500)
);

alter table sentimento_usuario add constraint FK_sentimento_usuario_id_usuario foreign key(id_usuario) references Usuario(id_usuario);
alter table sentimento_usuario add constraint FK_sentimento_usuario_id_sentimento foreign key(id_sentimento) references Sentimento(id_sentimento);
alter table sugestao add constraint FK_sugestao_id_usuario_usuario foreign key(id_usuario) references Usuario(id_usuario);


insert into usuario (nome, email, senha) values ('caio','caio@gg.com','123');
insert into usuario (nome, email, senha) values ('lucas','lucas@gg.com','12345');

insert into sentimento (sentimento) values ('alegria');
insert into sentimento (sentimento) values ('tristeza');
insert into sentimento (sentimento) values ('medo');

insert into sentimento_usuario (id_usuario, id_sentimento) values (1, 2);
insert into sentimento_usuario (id_usuario, id_sentimento) values (2, 1);
insert into sentimento_usuario (id_usuario, id_sentimento) values (1, 3);

insert into sugestao (sugestao, id_usuario, id_sentimento) values ('procure se distrair mais', 1, 1);
insert into sugestao (sugestao, id_usuario, id_sentimento) values ('procure se distrair mais com peixes', 2, 2);
insert into sugestao (sugestao, id_usuario, id_sentimento) values ('procure se distrair mais com cachorros', 1, 2);

select * from usuario;
select * from sentimento;
select * from sentimento_usuario;
select * from sugestao;
