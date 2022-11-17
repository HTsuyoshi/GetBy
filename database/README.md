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
        int id_usuario FK
    }

    Usuario ||..o{ Sentimento_usuario : "Consulta"
    Sentimento ||..o{ Sentimento_usuario : "Consulta"
    Usuario ||--o{ Sugestao : "Da"
```
