from pydantic import BaseModel

class Usuario(BaseModel):
    nome: str
    email: str
    senha: str

    class Config:
        orm_mode = True

class Sentimento(BaseModel):
    sentimento: str

    class Config:
        orm_mode = True

class Sentimento_usuario(BaseModel):
    idUsuario: int
    idSentimento: int

    class Config:
        orm_mode = True

class Sugestao(BaseModel):
    idUsuario: int
    sugestao: str

    class Config:
        orm_mode = True
