from pydantic import BaseModel

class Schema_usuario(BaseModel):
    id_usuario: int
    nome: str
    email: str
    senha: str

    class Config:
        orm_mode = True

class Schema_sentimento(BaseModel):
    id_sentimento: int
    sentimento: str

    class Config:
        orm_mode = True

class Schema_sentimento_usuario(BaseModel):
    id_usuario: int
    id_sentimento: int

    class Config:
        orm_mode = True

class Schema_sugestao(BaseModel):
    id_sugestao: int
    id_usuario: int
    sugestao: str

    class Config:
        orm_mode = True
