# Banco de dados

O banco de dados escolhido foi o [postgres](https://www.postgresql.org/)

Estrutura do banco de dados:

```mermaid
erDiagram
    Usuario {
        int Id PK
        string Name
        string Email
        string Senha
    }
    Sentimento {
        int Id PK
        string Sentimento
        int id_usuario FK
    }

    Sugestao {
        int Id PK
        string Sugestao
        int id_usuario FK
    }

    Usuario ||..o{ Sentimento : "Consulta"
    Usuario ||--o{ Sugestao : "Da"
```
