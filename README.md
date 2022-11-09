# GetBy

O trabalho foi separado em 3 pastas:

- [front-end](./frontend)
- [back-end](./backend)
- [database](./database)

E um arquivo adicional explicando um pouco mais da configuração do docker:

- [docker](./DOCKER.md)

## Requirements

Para rodar a aplicação é necessário ter [docker](https://www.docker.com/).

## Rodar

Para subir a aplicação rodar:

```sh
make build && make start

# ou

COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose build
COMPOSE_PROJECT_NAME=getby docker-compose up
```
