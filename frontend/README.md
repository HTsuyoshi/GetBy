# Front end

Teconologia: `React`

Responsáveis: `Fernanda`, `Gabi`

#### Descrição

Figma: [link](https://www.figma.com/file/DGBdXRHWqwCtKJeKCfIwJ6/GetBy?node-id=0%3A1)

Jornada do usuário:

```mermaid
graph TD
    PaginaMapa --> Home
    PaginaValidacao --> Home
    Home --> PaginaAjudar
    Home --> PaginaBuscarAjuda
    Home --> PaginaLogin
    PaginaLogin --> PaginaEsqueciSenha
    PaginaLogin --> PaginaCadastreSe
    PaginaLogin --> Home
    PaginaBuscarAjuda --> PaginaDica
    PaginaDica --> PaginaAtendimento
    PaginaDica --> Home
    PaginaAjudar --> PaginaLogin
    PaginaCadastreSe --> Home
    PaginaEsqueciSenha --> Home
    PaginaAtendimento --> Home
```

OBS: A `PaginaMapa` e `PaginaValidacao` podem ser acessadas por qualquer página.

#### Arquivos

- `.nginx`: Arquivo de configuração para o _container nginx_.
- `frontend.Dockerfile`: Arquivo para criar o _container_ do _front end_.
- `*`: Código fonte do front.
