from pydantic import BaseModel

class Schema_usuario(BaseModel):
    nome: str
    email: str
    senha: str

    class Config:
        orm_mode = True

class Schema_sentimento(BaseModel):
    sentimento: str

    class Config:
        orm_mode = True

class Schema_sentimento_usuario(BaseModel):
    #idUsuario: int
    #idSentimento: int

    class Config:
        orm_mode = True

class Schema_sugestao(BaseModel):
    #idUsuario: int
    sugestao: str

    class Config:
        orm_mode = True
