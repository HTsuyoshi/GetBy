from fastapi import FastAPI
from fastapi import Response, Cookie, HTTPException
from fastapi_sqlalchemy import DBSessionMiddleware, db
from fastapi.middleware.cors import CORSMiddleware
import bcrypt
import jwt

from datetime import datetime
from typing import Union
import os

from models import Usuario, Sentimento, Sentimento_usuario, Sugestao
from schema import Login_info, Schema_usuario, Schema_sentimento, Schema_sentimento_usuario, Schema_sugestao

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

CHAVE_SECRETA="chave_super_secreta"
ALGORITMO="HS256"

@getby.get("/")
async def status():
    return {'message': 'active'}

@getby.post("/login/")
async def login_user(login: Login_info, res: Response):
    passwd = db.session.query(Usuario).filter(Usuario.email == login.email).first()
    if not passwd:
        raise HTTPException(status_code=400, detail='Autenticação falhou')
    passwd = passwd.senha.encode("UTF-8")

    if bcrypt.checkpw(login.senha.encode('UTF-8'), passwd):
        data = { 'email': login.email, 'date': datetime.now().strftime('%H-%M-%S') }
        encoded_jwt = jwt.encode(data, CHAVE_SECRETA, ALGORITMO)
        res.set_cookie(key='AUTH', value=encoded_jwt)
        return { 'AUTH': encoded_jwt }
    else:
        raise HTTPException(status_code=400, detail='Autenticação falhou')

@getby.post('/cadastro/', response_model=Schema_usuario)
async def add_usuario(usuario: Schema_usuario, res: Response):
    novo_usuario = Usuario(nome=usuario.nome, email=usuario.email, senha=bcrypt.hashpw(usuario.senha.encode('UTF-8'), bcrypt.gensalt()).decode('UTF-8'))
    email_existe = db.session.query(Usuario).filter(Usuario.email == usuario.email).first()
    if email_existe:
        raise HTTPException(status_code=400, detail='Cadastro falhou')

    usuario_existe = db.session.query(Usuario).filter(Usuario.nome == usuario.nome).first()
    if usuario_existe:
        raise HTTPException(status_code=400, detail='Cadastro falhou')

    try:
        db.session.add(novo_usuario)
        db.session.commit()
    except Exception:
        raise HTTPException(status_code=400, detail='Cadastro falhou')
    data = { 'email': usuario.email, 'date': datetime.now().strftime('%H-%M-%S')}
    encoded_jwt = jwt.encode(data, CHAVE_SECRETA, ALGORITMO)
    res.set_cookie(key='AUTH', value=encoded_jwt)
    return usuario

@getby.get('/test_usuario/')
async def get_usuario():
    usuarios = db.session.query(Usuario).all()
    return usuarios

#@getby.post('/sentimento/', response_model=Schema_sentimento)
#async def add_sentimento(sentimento: Schema_sentimento):
#    novo_sentimento = Sentimento(sentimento=sentimento.sentimento)
#    db.session.add(novo_sentimento)
#    db.session.commit()
#    return novo_sentimento

@getby.get('/sentimento/')
async def get_sentimento():
    sentimentos = db.session.query(Sentimento).all()
    return sentimentos

@getby.post('/sentimento_usuario/', response_model=Schema_sentimento_usuario)
async def add_sentimento_usuario(sentimento_usuario: Schema_sentimento_usuario, AUTH = Cookie(None)):
    if not AUTH:
        raise HTTPException(status_code=403, detail='Usuário não logado')
    data: dict[str, str]
    try:
        data = jwt.decode(AUTH.encode('UTF-8'), CHAVE_SECRETA, [ALGORITMO])
    except Exception:
        raise HTTPException(status_code=403, detail='Token inválido')

    usuario = db.session.query(Usuario).filter(Usuario.email == data['email']).first()
    if not usuario:
        raise HTTPException(status_code=404, detail='Usuário não existe')

    sentimento = db.session.query(Sentimento).filter(Sentimento.id_sentimento == sentimento_usuario.id_sentimento).first()
    if not sentimento:
        raise HTTPException(status_code=404, detail='Sentimento não existe')

    novo_sentimento_usuario = Sentimento_usuario(id_usuario=usuario.id_usuario, id_sentimento=sentimento.id_sentimento)
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
async def add_sugestao(sugestao: Schema_sugestao, AUTH = Cookie(None)):
    if not AUTH:
        raise HTTPException(status_code=403, detail='Usuário não logado')
    data: dict[str, str]
    try:
        data = jwt.decode(AUTH.encode('UTF-8'), CHAVE_SECRETA, [ALGORITMO])
    except Exception:
        raise HTTPException(status_code=403, detail='Token inválido')

    usuario = db.session.query(Usuario).filter(Usuario.email == data['email']).first()
    if not usuario:
        raise HTTPException(status_code=404, detail='Usuário não existe')

    sentimento = db.session.query(Sentimento).filter(Sentimento.sentimento == sugestao.sentimento).first()
    if not sentimento:
        raise HTTPException(status_code=404, detail='Sentimento não existe')

    nova_sugestao = Sugestao(id_usuario=usuario.id_usuario, id_sentimento=sentimento.id_sentimento, sugestao=sugestao.sugestao)
    db.session.add(nova_sugestao)
    db.session.commit()
    return sugestao

@getby.get('/sugestao/')
async def get_sugestao():
    sugestoes = db.session.query(Sugestao).all()
    return sugestoes

@getby.get('/sugestao/aleatorio')
async def get_sugestao_aleatorio():
    sugestoes = db.session.query(Sugestao).all()
    from random import shuffle
    shuffle(sugestoes)
    return sugestoes.pop(0)
