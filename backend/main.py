import uvicorn
from fastapi import FastAPI
from fastapi_sqlalchemy import DBSessionMiddleware, db

from models import Usuario, Sentimento, Sentimento_usuario, Sugestao
from schema import Schema_usuario, Schema_sentimento, Schema_sentimento_usuario, Schema_sugestao
import os

getby = FastAPI()

db_name: str
db_user: str
db_pass: str

with open(os.environ['POSTGRES_DB_FILE'], 'r') as f:
    db_name = f.read().strip()

with open(os.environ['POSTGRES_USER_FILE'], 'r') as f:
    db_user = f.read().strip()

with open(os.environ['POSTGRES_PASSWORD_FILE'], 'r') as f:
    db_pass = f.read().strip()

db_url: str =  f'postgresql://{db_user}:{db_pass}@database/{db_name}'

# to avoid csrftokenError
getby.add_middleware(DBSessionMiddleware, db_url=db_url)

@getby.get('/')
def hello_world() -> dict[str, str]:
    return {'hello_world': 'hello_world'}

@getby.post('/usuario/', response_model=Schema_usuario)
async def add_usuario(usuario: Schema_usuario):
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

#@app.post('/author/', response_model=SchemaAuthor)
#async def author(author:SchemaAuthor):
#    db_author = ModelAuthor(name=author.name, age=author.age)
#    db.session.add(db_author)
#    db.session.commit()
#    return db_author

#@app.get('/author/')
#async def author():
#    author = db.session.query(ModelAuthor).all()
#    return author
