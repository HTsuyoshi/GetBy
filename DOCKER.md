# Docker

Esse arquivo dá um pequeno resumo das partes mais importantes dos contâiners do aplicativo. A aplicação se baseia em 3 contâiners:

#### Frontend

Imagem:

#### Backend

Imagem base: `python:3.10-slim`

Redes:

- database: vai conectar o banco de dados com o backend

Vaiáveis de ambiente:

- UVICORN\_PORT=8000
- UVICORN\_HOST=0.0.0.0
- UVICORN\_WORKERS=1
- POSTGRES\_DB\_FILE=${POSTGRES\_DB\_FILE:?err}
- POSTGRES\_USER\_FILE=${POSTGRES\_USER\_FILE:?err}
- POSTGRES\_PASSWORD\_FILE=${POSTGRES\_PASSWORD\_FILE:?err}

Secrets:

- db: database/postgres-db.txt
- user: database/postgres-user.txt
- senha: database/postgres-passwd.txt

#### Database

Imagem base: `postgres:14.2-alpine`

Redes:

- database: vai conectar o banco de dados com o backend

Volumes:

- postgres\_db: armazenar o banco de dados em um volume persistente

Vaiáveis de ambiente:

- POSTGRES\_DB\_FILE=${POSTGRES\_DB\_FILE:?err}
- POSTGRES\_USER\_FILE=${POSTGRES\_USER\_FILE:?err}
- POSTGRES\_PASSWORD\_FILE=${POSTGRES\_PASSWORD\_FILE:?err}

Secrets:

- db: database/postgres-db.txt
- user: database/postgres-user.txt
- senha: database/postgres-passwd.txt
