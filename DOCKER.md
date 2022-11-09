# Docker

Esse arquivo dá um pequeno resumo das partes mais importantes dos contâiners do aplicativo. A aplicação se baseia em 3 contâiners:

#### Frontend

Imagem:

#### Backend

Imagem base: `python:3.10-slim`

Redes:

- database: vai conectar o banco de dados com o backend

Vaiáveis de ambiente:

- `UVICORN_PORT`=8000
- `UVICORN_HOST`=0.0.0.0
- `UVICORN_WORKERS`=1
- `POSTGRES_DB_FILE`=${POSTGRES\_DB\_FILE:?err}
- `POSTGRES_USER_FILE`=${POSTGRES\_USER\_FILE:?err}
- `POSTGRES_PASSWORD_FILE`=${POSTGRES\_PASSWORD\_FILE:?err}

Secrets:

- `db`: database/postgres-db.txt
- `user`: database/postgres-user.txt
- `senha`: database/postgres-passwd.txt

#### Database

Imagem base: `postgres:14.2-alpine`

Redes:

- database: vai conectar o banco de dados com o backend

Volumes:

- postgres\_db: armazenar o banco de dados em um volume persistente

Vaiáveis de ambiente:

- `POSTGRES_DB_FILE`=${POSTGRES\_DB\_FILE:?err}
- `POSTGRES_USER_FILE`=${POSTGRES\_USER\_FILE:?err}
- `POSTGRES_PASSWORD_FILE`=${POSTGRES\_PASSWORD\_FILE:?err}

Secrets:

- `db`: database/postgres-db.txt
- `user`: database/postgres-user.txt
- `senha`: database/postgres-passwd.txt
