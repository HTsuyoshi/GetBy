# Back end

Responsáveis: `Gustavo`, `Henrique`

### Especificações

Tecnologias: `Python`

Frameworks: `FastAPI`, `SQLalchemy`, `unittest`

### Descrição

A API do backend vai ficar aberta na porta `8000` no computador host.

Para ver a documentação da API basta acessar esse [link](localhost:8000/docs)

Foi disponibilizado os seguintes endpoints:

#### GET

- `/usuario/`: listar todos os usuários do banco de dados
- `/sentimento/`: listar todos os sentimentos do banco de dados
- `/sentimento_usuario/sentimento/{number}/`: listar os usuarios que tem um sentimento específico
- `/sentimento_usuario/usuario/{number}/`: listar os sentimentos que um usuário específico tem
- `/sugestao`: listar todas as sugestões do banco de dados

#### POST

- `/usuario`: adicionar um usuário ao banco de dados
- `/sentimento`: adicionar um sentimento ao banco de dados
- `/sentimento_usuario`: adicionar uma relação entre usuário e sentimento
- `/sugestao`: adicionar uma sugestão ao banco de dados
