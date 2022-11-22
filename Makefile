.PHONY: 'start stop build clean setup'

start: build
	@echo 'Starting containers...'
	@COMPOSE_PROJECT_NAME=getby docker-compose up

stop:
	@echo 'Stopping containers...'
	@docker-compose down

build:
	@echo 'Building the docker image...'
	@COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose build

clean:
	@echo 'Removing the docker images...'
	@docker container stop getby_database 2>&- || echo 'Error while stoping getby-database container'
	@docker container stop getby_backend 2>&- || echo 'Error while stoping getby-backend container'
	@docker container stop getby_frontend 2>&- || echo 'Error while stoping getby-frontend container'
	@docker container rm getby_database 2>&- || echo 'Error while removing getby-database container'
	@docker container rm getby_backend 2>&- || echo 'Error while removing getby-backend container'
	@docker container rm getby_frontend 2>&- || echo 'Error while removing getby-frontend container'
	@docker image rm getby_database:1.0 2>&- || echo 'Error while removing getby-database image'
	@docker image rm getby_backend:1.0 2>&- || echo 'Error while removing getby-backend image'
	@docker image rm getby_frontend:1.0 2>&- || echo 'Error while removing getby-backend image'
	@docker volume rm getby_postgres_db 2>&- || echo 'Error while removing getby-database-db volume'
	@docker network rm getby_database 2>&- || echo 'Error while removing getby-database network'
	@docker network rm getby_front 2>&- || echo 'Error while removing getby-database network'
