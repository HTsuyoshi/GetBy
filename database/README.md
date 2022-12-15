# Banco de dados

Responsáveis: `Gabriel`, `Guilherme`

Tecnologia: `postgres`

O banco de dados escolhido foi o [postgres](https://www.postgresql.org/)

Estrutura do banco de dados:

```mermaid
erDiagram
    Usuario {
        int ID_usuario PK
        string Name
        string Email
        string Senha
    }
    Sentimento {
        int ID_sentimento PK
        string Sentimento
    }

    Sentimento_usuario{
        int idUsuario
        int idSentimento
    }

    Sugestao {
        int Id PK
        string Sugestao
        int feedback
        int id_usuario FK
    }

    Sentimento_usuario {
        int idUsuario
        int idSentimento
    }

    Usuario_sugestao {
        int idUsuario
        int idSentimento
        int feedback
    }

    Usuario ||..o{ Sentimento_usuario : "Consulta"
    Sentimento ||..o{ Sentimento_usuario : "Consulta"
    Usuario ||--o{ Sugestao : "Da"
    Usuario ||..o{ Usuario_sugestao : "Valida"
```

#### Usuario

- ID\_usuario: Identificador do usuário.
- Name: Nome do usuário.
- Email: Email do usuário.
- Senha: Hash da senha do usuário.

#### Sentimento

- ID\_sentimento: Identificador do sentimento.
- Sentimento: Nome ou descrição do sentimento.

#### Sentimento\_usuario

- idUsuario: Usuário que está sentindo determinado sentimento.
- idSentimento: Identificador para o sentimento do usuário

#### Sugestao

- Id: Identificador da sugestão.
- Sugestao: Texto que armazena a sugestão.
- Feedback: Quantidade de votos positivos e negativos que essa sugestão recebeu.
- id\_usuario: Usuário que deu determinada sugestão.

#### Usuario\_sugestao

- idUsuario: Usuário que deu feedback na sugestão.
- idSugestao: Sugestão que foi avaliada.
- feedback: Pode receber o valor de 1 ou -1.
