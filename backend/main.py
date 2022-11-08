import uvicorn
from fastapi import FastAPI
from fastapi_sqlalchemy import DBSessionMiddleware, db

from schema import Usuario, Sentimento, Sentimento_usuario, Sugestao

from models import Usuario, Sentimento, Sentimento_usuario, Sugestao

import os

getby = FastAPI()

db_name: str
db_user: str
db_pass: str

with open(os.environ['POSTGRES_DB_FILE'], 'r') as f:
    db_name = f.read()

with open(os.environ['POSTGRES_USER_FILE'], 'r') as f:
    db_user = f.read()

with open(os.environ['POSTGRES_PASSWORD_FILE'], 'r') as f:
    db_pass = f.read()

db_url: str =  f'postgresql://postgres:{db_pass}@localhost/{db_name}'

# to avoid csrftokenError
getby.add_middleware(DBSessionMiddleware, db_url=db_url)

@getby.get('/')
def hello_world() -> dict[str, str]:
    return {'hello_world': 'hello_world'}

#@app.post('/book/', response_model=SchemaBook)
#async def book(book: SchemaBook):
#    db_book = ModelBook(title=book.title, rating=book.rating, author_id = book.author_id)
#    db.session.add(db_book)
#    db.session.commit()
#    return db_book
#
#@app.get('/book/')
#async def book():
#    book = db.session.query(ModelBook).all()
#    return book
#
#
#  
#@app.post('/author/', response_model=SchemaAuthor)
#async def author(author:SchemaAuthor):
#    db_author = ModelAuthor(name=author.name, age=author.age)
#    db.session.add(db_author)
#    db.session.commit()
#    return db_author
#
#@app.get('/author/')
#async def author():
#    author = db.session.query(ModelAuthor).all()
#    return author

