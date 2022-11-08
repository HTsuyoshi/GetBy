from sqlalchemy import Column, ForeignKey, Integer, VARCHAR
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

Base  = declarative_base()

class Usuario(Base):
    __tablename__ = 'usuario'
    id  = Column(Integer, primary_key=True, index=True)
    nome = Column(VARCHAR(50))
    email = Column(VARCHAR(50))
    senha = Column(VARCHAR(50))

class Sentimento(Base):
    __tablename__ = 'sentimento'
    ID_sentimento = Column(Integer, primary_key=True, index=True)
    sentimento = Column(VARCHAR(30))

class Sentimento_usuario(Base):
    __tablename__ = 'sentimento_usuario'
    id  = Column(Integer, primary_key=True, index=True)
    idUsuario = relationship('usuario')
    idSentimento = relationship('sentimento')

class Sugestao(Base):
    __tablename__ = 'sugestao'
    id  = Column(Integer, primary_key=True, index=True)
    idUsuario = relationship('usuario')
    sugestao = Column(VARCHAR(500))
