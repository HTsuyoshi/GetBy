from fastapi import FastAPI
from fastapi_sqlalchemy import DBSessionMiddleware, db
from fastapi.middleware.cors import CORSMiddleware

from models import Usuario, Sentimento, Sentimento_usuario, Sugestao
from schema import Schema_usuario, Schema_sentimento, Schema_sentimento_usuario, Schema_sugestao

import os

getby = FastAPI()

with open(os.environ['POSTGRES_DB_FILE'], 'r') as db_name, open(os.environ['POSTGRES_USER_FILE'], 'r') as db_user, open(os.environ['POSTGRES_PASSWORD_FILE'], 'r') as db_pass:
    db_url: str =  f'postgresql://{db_user.read().strip()}:{db_pass.read().strip()}@database/{db_name.read().strip()}'

# CORS error
getby.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# CSRF token error
getby.add_middleware(DBSessionMiddleware, db_url=db_url)

from pydantic import BaseModel
from fastapi.encoders import jsonable_encoder

class Login_info(BaseModel):
    email: str
    password: str

@getby.post("/login")
async def login_user(login: Login_info):
    passwd = db.session.query(Usuario).filter(Usuario.email == login.email).first()
    if not passwd: return {'message': 'Login failed'}
    passwd = passwd.senha.encode("UTF-8")

    import bcrypt
    if bcrypt.checkpw(login.password.encode('UTF-8'), passwd):
        data = jsonable_encoder(login)
        import jwt
        encoded_jwt = jwt.encode(data, "chave_super_secreta", algorithm="HS256")
        return {'token': encoded_jwt }
    else:
        return {'message': 'Login failed'}

@getby.post('/usuario/', response_model=Schema_usuario)
async def add_usuario(usuario: Schema_usuario):
    salt = b'$2b$12$Fs26pKkK/O3ASd9UAYfOTe' # bcrypt.gensalt()
    novo_usuario = Usuario(nome=usuario.nome, email=usuario.email, senha=usuario.email)
    db.session.add(novo_usuario)
    db.session.commit()
    return novo_usuario

@getby.get('/usuario/')
async def get_usuario():
    usuarios = db.session.query(Usuario).all()
    return usuarios

@getby.post('/sentimento/', response_model=Schema_sentimento)
async def add_sentimento(sentimento: Schema_sentimento):
    novo_sentimento = Sentimento(sentimento=sentimento.sentimento)
    db.session.add(novo_sentimento)
    db.session.commit()
    return novo_sentimento

@getby.get('/sentimento/')
async def get_sentimento():
    sentimentos = db.session.query(Sentimento).all()
    return sentimentos

@getby.post('/sentimento_usuario/', response_model=Schema_sentimento_usuario)
async def add_sentimento_usuario(sentimento_usuario: Schema_sentimento_usuario):
    novo_sentimento_usuario = Sentimento_usuario(id_usuario=sentimento_usuario.id_usuario, id_sentimento=sentimento_usuario.id_sentimento)
    db.session.add(novo_sentimento_usuario)
    db.session.commit()
    return novo_sentimento_usuario

@getby.get('/sentimento_usuario/sentimento/{number}')
async def get_sentimento_usuario_sentimento(number: int):
    sentimentos_usuarios = db.session.query(Sentimento_usuario).filter(Sentimento_usuario.id_sentimento == number).all()
    return sentimentos_usuarios

@getby.get('/sentimento_usuario/usuario/{number}')
async def get_sentimento_usuario_usuario(number: int):
    sentimentos_usuarios = db.session.query(Sentimento_usuario).filter(Sentimento_usuario.id_usuario == number).all()
    return sentimentos_usuarios

@getby.post('/sugestao/', response_model=Schema_sugestao)
async def add_sugestao(sugestao: Schema_sugestao):
    nova_sugestao = Sugestao(id_usuario=sugestao.id_usuario, id_sentimento=sugestao.id_sentimento, sugestao=sugestao.sugestao)
    db.session.add(nova_sugestao)
    db.session.commit()
    return nova_sugestao

@getby.get('/sugestao/')
async def get_sugestao():
    sugestoes = db.session.query(Sugestao).all()
    return sugestoes

