create table usuario
(
	ID_usuario serial primary key,
	nome varchar(50),
	email varchar(50),
	senha varchar(10)
);

create table sentimento
(
	ID_sentimento serial primary key,
	sentimento varchar(30)
);

create table sentimento_usuario
(
	idUsuario int,
	idSentimento int
);

create table sugestao
(
	ID_sugestao serial primary key,
	sugestao varchar(500),
	idUsuario int
);

alter table sentimento_usuario add constraint FK_sentimento_usuario_idUsuario foreign key(idUsuario) references Usuario(ID_usuario);
alter table sentimento_usuario add constraint FK_sentimento_usuario_idSentimento foreign key(idSentimento) references Sentimento(ID_sentimento);
alter table sugestao add constraint FK_sugestao_idUsuario_usuario foreign key(idUsuario) references Usuario(ID_usuario);


insert into usuario (nome, email, senha) values ('caio','caio@gg.com','123');
insert into usuario (nome, email, senha) values ('lucas','lucas@gg.com','12345');

insert into sentimento (sentimento) values ('alegria');
insert into sentimento (sentimento) values ('tristeza');
insert into sentimento (sentimento) values ('medo');


insert into sentimento_usuario (idUsuario, idSentimento) values (1, 2);
insert into sentimento_usuario (idUsuario, idSentimento) values (2, 1);
insert into sentimento_usuario (idUsuario, idSentimento) values (1, 3);

insert into sugestao (sugestao, idUsuario) values ('procure se distrair mais', 1);
insert into sugestao (sugestao, idUsuario) values ('procure se distrair mais com peixes', 2);
insert into sugestao (sugestao, idUsuario) values ('procure se distrair mais com cachorros', 1);

select * from usuario;
select * from sentimento;
select * from sentimento_usuario;
select * from sugestao;
