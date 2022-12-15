# Back end

Responsáveis: `Gustavo`, `Henrique`

### Especificações

Tecnologias: `Python`

Frameworks: `FastAPI`, `SQLalchemy`, `pytest`

### Profiles

Mais detalhes sobre a infra estrutura da aplicação [aqui](../DOCKER.md)

#### Deploy

- `requirements.txt`: Usado para instalar as dependências da aplicação.
- `backend.Dockerfile`: Usado para criar a imagem do backend da aplicação.
- `src`: Pasta com o código da aplicação.

#### Test

- `test_requirements.txt`: Usado para instalar as dependências para testar a aplicação.
- `backend_test.Dockerfile`: Usado para criar a imagem de teste do backend.
- `test`: Pasta com os testes que vão ser rodado para testar o backend

### Descrição

A API do backend vai ficar aberta na porta `8000` no computador host.

Para ver a documentação da API basta acessar esse [link](localhost:8000/docs).

Foi disponibilizado os seguintes endpoints:

#### GET

- `/`: verificar status da aplicação.
- `/test_usuario/`: listar todos os usuarios do banco de dados
- `/sentimento/`: listar todos os sentimentos do banco de dados
- `/sentimento_usuario/sentimento/{number}/`: listar os usuarios que tem um sentimento específico
- `/sentimento_usuario/usuario/{number}/`: listar os sentimentos que um usuário específico tem
- `/sugestao/`: listar todas as sugestões do banco de dados
- `/sugestao/aleatorio/`: pegar uma sugestão aleatória do banco de dados
- `/test_usuario_sugestao/`: listar os usuário e seus feedbacks em relação a uma sugestão

#### POST

- `/login/`: o usuário pode se autenticar com suas credenciais e pegar um token JWT
- `/cadastro/`: o usuário pode se cadastrar e pegar um token JWT
- `/sentimento_usuario/`: adicionar uma um sentimento que o usuário *autenticado* está sentindo
- `/sugestao/`: o usuário *autenticado* adicionar uma sugestão ao banco de dados
- `/usuario_sugestao/`: adicionar o _feedback_ de um usuário em relação a uma sugestão
