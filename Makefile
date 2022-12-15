
.PHONY: 'start'
start: build
	@echo 'Starting containers...'
	@COMPOSE_PROJECT_NAME=getby docker-compose --profile=deploy up

.PHONY: 'test'
test: clean
	@echo 'Starting containers...'
	@COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose --profile=test build
	@COMPOSE_PROJECT_NAME=getby docker-compose --profile=test up

.PHONY: 'stop'
stop:
	@echo 'Stopping containers...'
	@docker-compose down

.PHONY: 'build'
build:
	@echo 'Building the docker image...'
	@COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose --profile=deploy build

.PHONY: 'clean'
clean:
	@echo 'Removing the docker images...'
	@docker container stop getby_database || echo 'Error while stoping getby-database container'
	@docker container stop getby_backend || echo 'Error while stoping getby-backend container'
	@docker container stop getby_backend_test || echo 'Error while stoping getby-backend-test container'
	@docker container stop getby_frontend || echo 'Error while stoping getby-frontend container'
	@docker container rm getby_database || echo 'Error while removing getby-database container'
	@docker container rm getby_backend || echo 'Error while removing getby-backend container'
	@docker container rm getby_backend_test || echo 'Error while removing getby-backend-test container'
	@docker container rm getby_frontend || echo 'Error while removing getby-frontend container'
	@docker image rm getby_database:1.0 || echo 'Error while removing getby-database image'
	@docker image rm getby_backend:1.0 || echo 'Error while removing getby-backend image'
	@docker image rm getby_backend_test:1.0 || echo 'Error while removing getby-backend-test image'
	@docker image rm getby_frontend:1.0 || echo 'Error while removing getby-backend image'
	@docker volume rm getby_postgres_db || echo 'Error while removing getby-database-db volume'
	@docker network rm getby_database || echo 'Error while removing getby-database network'
	@docker network rm getby_front || echo 'Error while removing getby-database network'
