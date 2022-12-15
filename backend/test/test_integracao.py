import sys
sys.path.append('.')
sys.path.append('./src/')

from fastapi.testclient import TestClient
from src.main import getby

### /login/ ###

def test_login_request_invalido():
    client = TestClient(getby)
    response = client.delete(
            '/login/',
            headers = { 'X-Token': 'coneofsilence' },
            json = { 'email': 'caio@gg.com', 'senha': '123' }
    )
    assert response.status_code == 405

def test_login_valido():
    client = TestClient(getby)
    response = client.post(
            '/login/',
            headers = { 'X-Token': 'coneofsilence' },
            json = { 'email': 'caio@gg.com', 'senha': '123' }
    )
    assert response.status_code == 200

def test_login_email_invalido():
    client = TestClient(getby)
    response = client.post(
            '/login/',
            headers = { 'X-Token': 'coneofsilence'},
            json = { 'email': 'caioioio@gg.com', 'senha': '123' }
    )
    assert response.status_code == 400
    assert response.json() == { 'detail': 'Autenticação falhou' }

def test_login_senha_invalida():
    client = TestClient(getby)
    response = client.post(
            '/login/',
            headers={'X-Token': 'coneofsilence'},
            json={ 'email': 'caio@gg.com', 'senha': '12312312312312' }
    )
    assert response.status_code == 400
    assert response.json() == { 'detail': 'Autenticação falhou' }

### /cadastro/ ###

def test_cadastro_request_invalido():
    client = TestClient(getby)
    response = client.delete(
            '/cadastro/',
            json = { 'id_usuario': 0, 'nome': 'jorge', 'email': 'USUARIO_NOVO@gg.com', 'senha': 'senha123' }
    )
    assert response.status_code == 405

def test_cadastro_valido():
    client = TestClient(getby)
    response = client.post(
            '/cadastro/',
            json = { 'id_usuario': 0, 'nome': 'jorge', 'email': 'USUARIO_NOVO@gg.com', 'senha': 'senha123' }
    )
    assert response.status_code == 200
    assert response.json()['email'] == 'USUARIO_NOVO@gg.com'
    assert response.json()['nome'] == 'jorge'
    assert response.json()['senha'] == 'senha123'

def test_cadastro_usuario_invalido():
    client = TestClient(getby)
    response = client.post(
            '/cadastro/',
            json = { 'id_usuario': 0, 'nome': 'jorge', 'email': 'caio@gg.com', 'senha': 'senha123' }
    )
    assert response.status_code == 400
    assert response.json() == { 'detail': 'Cadastro falhou'}

def test_cadastro_email_invalido():
    client = TestClient(getby)
    response = client.post(
            '/cadastro/',
            json = { 'id_usuario': 0, 'nome': 'guilherme', 'email': 'guilherme@gg.com', 'senha': 'senha123' }
    )
    assert response.status_code == 400
    assert response.json() == { 'detail': 'Cadastro falhou'}

# Teste valor limite

def test_cadastro_usuario_longo_valido():
    client = TestClient(getby)
    response = client.post(
            '/cadastro/',
            json = { 'id_usuario': 0, 'nome': 'jorgejorgejorgejorgejorgejorgejorgejorgejorgejorg', 'email': 'jorgeson@gg.com', 'senha': 'senha123' }
    )
    assert response.status_code == 200
    assert response.json()['email'] == 'jorgeson@gg.com'
    assert response.json()['nome'] == 'jorgejorgejorgejorgejorgejorgejorgejorgejorgejorg'
    assert response.json()['senha'] == 'senha123'

def test_cadastro_usuario_longo_invalido():
    client = TestClient(getby)
    response = client.post(
            '/cadastro/',
            json = { 'id_usuario': 0, 'nome': 'jorgejorgejorgejorgejorgejorgejorgejorgejorgejorgejorgejorge', 'email': 'jorgejorge@gg.com', 'senha': 'senha123' }
    )
    assert response.status_code == 400
    assert response.json() == { 'detail': 'Cadastro falhou'}

def test_cadastro_email_longo_valido():
    client = TestClient(getby)
    response = client.post(
            '/cadastro/',
            json = { 'id_usuario': 0, 'nome': 'guikendji123', 'email': 'guilhermeguilhermeguilhermeguilhermeguilhe@gg.com', 'senha': 'senha123' }
    )
    assert response.status_code == 200
    assert response.json()['email'] == 'guilhermeguilhermeguilhermeguilhermeguilhe@gg.com'
    assert response.json()['nome'] == 'guikendji123'
    assert response.json()['senha'] == 'senha123'

def test_cadastro_email_longo_invalido():
    client = TestClient(getby)
    response = client.post(
            '/cadastro/',
            json = { 'id_usuario': 0, 'nome': 'guilherme', 'email': 'guilhermeguilhermeguilhermeguilhermeguilhermeguilherme@gg.com', 'senha': 'senha123' }
    )
    assert response.status_code == 400
    assert response.json() == { 'detail': 'Cadastro falhou'}

### /sentimento/ ###

def test_sentimento_request_invalido():
    client = TestClient(getby)
    response = client.delete('/sentimento/')
    assert response.status_code == 405

def test_sentimento_valido():
    client = TestClient(getby)
    response = client.get('/sentimento/')
    assert response.status_code == 200
    assert response.json() ==  [{'id_sentimento': 1, 'sentimento': 'bravo'}, {'id_sentimento': 2, 'sentimento': 'feliz'}, {'id_sentimento': 3, 'sentimento': 'triste'}]

### /sentimento_usuario/sentimento/{numero} ###

def test_sentimento_usuario_sentimento_request_invalido():
    client = TestClient(getby)
    response = client.delete('/sentimento_usuario/sentimento/1')
    assert response.status_code == 405

def test_sentimento_usuario_sentimento_valido():
    client = TestClient(getby)
    response = client.get('/sentimento_usuario/sentimento/1')
    assert response.status_code == 200
    assert response.json() == [{'id_sentimento': 1, 'id_usuario': 1}, {'id_sentimento': 1, 'id_usuario': 5}, {'id_sentimento': 1, 'id_usuario': 7}]

### /sentimento_usuario/usuario/{numero} ###

def test_sentimento_usuario_usuario_request_invalido():
    client = TestClient(getby)
    response = client.delete('/sentimento_usuario/usuario/1')
    assert response.status_code == 405

def test_sentimento_usuario_usuario_valido():
    client = TestClient(getby)
    response = client.get('/sentimento_usuario/usuario/1')
    assert response.status_code == 200
    assert response.json() == [{'id_sentimento': 1, 'id_usuario': 1}]

### /sentimento_usuario/ ###

def test_sentimento_usuario_request_invalido():
    client = TestClient(getby)
    response = client.delete('/sentimento_usuario/')
    assert response.status_code == 405

def test_sentimento_usuario_sem_login_invalido():
    client = TestClient(getby)
    client.auth = None
    response = client.post(
            '/sentimento_usuario/',
            headers = { 'X-Token': 'coneofsilence' },
            json = { 'id_sentimento': 2, 'id_usuario': 1},
    )
    assert response.status_code == 403
    assert response.json() == { 'detail': 'Usuário não logado' }

def test_sentimento_usuario_valido():
    client = TestClient(getby)
    response = client.post(
            '/login/',
            headers = { 'X-Token': 'coneofsilence' },
            json = { 'email': 'caio@gg.com', 'senha': '123' }
    )
    token = response.cookies['AUTH']
    response = client.post(
            '/sentimento_usuario/',
            headers = { 'X-Token': 'coneofsilence' },
            json = { 'id_sentimento': 2, 'id_usuario': 1},
            cookies = { 'AUTH': token }
    )
    assert response.status_code == 200
    assert response.json()['id_usuario'] == 1
    assert response.json()['id_sentimento'] == 2

def test_sentimento_usuario_token_invalido_invalido():
    client = TestClient(getby)
    token = 'token_invalido'
    response = client.post(
            '/sentimento_usuario/',
            headers = { 'X-Token': 'coneofsilence' },
            json = { 'id_sentimento': 2, 'id_usuario': 1},
            cookies = { 'AUTH': token }
    )
    assert response.status_code == 403
    assert response.json() == { 'detail': 'Token inválido' }

def test_sentimento_usuario_sentimento_inexistente_invalido():
    client = TestClient(getby)
    response = client.post(
            '/login/',
            headers = { 'X-Token': 'coneofsilence' },
            json = { 'email': 'caio@gg.com', 'senha': '123' }
    )
    token = response.cookies['AUTH']
    response = client.post(
            '/sentimento_usuario/',
            headers = { 'X-Token': 'coneofsilence' },
            json = { 'id_sentimento': 9, 'id_usuario': 1},
            cookies = { 'AUTH': token }
    )
    assert response.status_code == 404
    assert response.json() == { 'detail': 'Sentimento não existe' }

### /sugestao/aleatorio ###

def test_sugestao_aleatorio_request_invalido():
    client = TestClient(getby)
    response = client.delete('/sugestao/aleatorio')
    assert response.status_code == 405

def test_sugestao_aleatorio_valido():
    client = TestClient(getby)
    response = client.get('/sugestao/aleatorio')
    assert response.status_code == 200
    assert response.json() in [{'sugestao': 'procure se distrair mais', 'id_sugestao': 1, 'id_usuario': 5, 'id_sentimento': 1, 'feedback': -2}, {'sugestao': 'procure se distrair mais com peixes', 'id_sugestao': 2, 'id_usuario': 5, 'id_sentimento': 2, 'feedback': 4}, {'sugestao': 'procure se distrair mais com cachorros', 'id_sugestao': 3, 'id_usuario': 5, 'id_sentimento': 3, 'feedback': 8}, {'sugestao': 'Quando estiver triste, converse com seu psicólogo ou amigo sobre o que te deixou com esse sentimento. Aproveite e busque assistir um filme de comédia para ajudar um pouco no humor', 'id_sugestao': 4, 'id_usuario': 2, 'id_sentimento': 3, 'feedback': 8}]

### /sugestao/ ###

def test_sugestao_request_invalido():
    client = TestClient(getby)
    response = client.delete('/sugestao/')
    assert response.status_code == 405

def test_sugestao_get_valido():
    client = TestClient(getby)
    response = client.get('/sugestao/')
    assert response.status_code == 200
    assert response.json() == [{'sugestao': 'procure se distrair mais', 'id_sugestao': 1, 'id_usuario': 5, 'id_sentimento': 1, 'feedback': -2}, {'sugestao': 'procure se distrair mais com peixes', 'id_sugestao': 2, 'id_usuario': 5, 'id_sentimento': 2, 'feedback': 4}, {'sugestao': 'procure se distrair mais com cachorros', 'id_sugestao': 3, 'id_usuario': 5, 'id_sentimento': 3, 'feedback': 8}, {'sugestao': 'Quando estiver triste, converse com seu psicólogo ou amigo sobre o que te deixou com esse sentimento. Aproveite e busque assistir um filme de comédia para ajudar um pouco no humor', 'id_sugestao': 4, 'id_usuario': 2, 'id_sentimento': 3, 'feedback': 8}]

def test_sugestao_sem_login_invalido():
    client = TestClient(getby)
    client.auth = None
    response = client.post(
            '/sugestao/',
            headers = { 'X-Token': 'coneofsilence' },
            json = { 'id_sugestao': 0, 'id_usuario': 0, 'sentimento': 'triste', 'sugestao': 'fique feliz :D', 'feedback': 0 }
    )
    assert response.status_code == 403
    assert response.json() == { 'detail': 'Usuário não logado' }

def test_sugestao_post_valido():
    client = TestClient(getby)
    response = client.post(
            '/login/',
            headers = { 'X-Token': 'coneofsilence' },
            json = { 'email': 'caio@gg.com', 'senha': '123' }
    )
    token = response.cookies['AUTH']
    response = client.post(
            '/sugestao/',
            headers = { 'X-Token': 'coneofsilence' },
            json = { 'id_sugestao': 0, 'id_usuario': 0, 'sentimento': 'triste', 'sugestao': 'fique feliz :D', 'feedback': 0 },
            cookies = { 'AUTH': token }
    )
    assert response.status_code == 200
    assert response.json()['sentimento'] == 'triste'
    assert response.json()['sugestao'] == 'fique feliz :D'

def test_sugestao_token_invalido_invalido():
    client = TestClient(getby)
    token = 'token_invalido'
    response = client.post(
            '/sugestao/',
            headers = { 'X-Token': 'coneofsilence' },
            json = { 'id_sugestao': 0, 'id_usuario': 0, 'sentimento': 'triste', 'sugestao': 'fique feliz :D', 'feedback': 0 },
            cookies = { 'AUTH': token }
    )
    assert response.status_code == 403
    assert response.json() == { 'detail': 'Token inválido' }

def test_sugestao_sentimento_inexistente_invalido():
    client = TestClient(getby)
    response = client.post(
            '/login/',
            headers = { 'X-Token': 'coneofsilence' },
            json = { 'email': 'caio@gg.com', 'senha': '123' }
    )
    token = response.cookies['AUTH']
    response = client.post(
            '/sugestao/',
            headers = { 'X-Token': 'coneofsilence' },
            json = { 'id_sugestao': 0, 'id_usuario': 0, 'sentimento': 'programador :0', 'sugestao': 'fique feliz :D', 'feedback': 0 },
            cookies = { 'AUTH': token }
    )
    assert response.status_code == 404
    assert response.json() == { 'detail': 'Sentimento não existe' }

### /usuario_sugestao/ ###

def test_usuario_sugestao_request_invalido():
    client = TestClient(getby)
    response = client.delete('/usuario_sugestao/')
    assert response.status_code == 405

def test_sugestao_sem_login_invalido():
    client = TestClient(getby)
    client.auth = None
    response = client.post(
            '/usuario_sugestao/',
            headers = { 'X-Token': 'coneofsilence' },
            json = { 'id_usuario': 0, 'id_sugestao': 2, 'feedback': 1 }
    )
    assert response.status_code == 403
    assert response.json() == { 'detail': 'Usuário não logado' }

def test_usuario_sugestao_post_valido():
    client = TestClient(getby)
    response = client.post(
            '/login/',
            headers = { 'X-Token': 'coneofsilence' },
            json = { 'email': 'caio@gg.com', 'senha': '123' }
    )
    token = response.cookies['AUTH']
    response = client.post(
            '/usuario_sugestao/',
            headers = { 'X-Token': 'coneofsilence' },
            json = { 'id_usuario': 0, 'id_sugestao': 2, 'feedback': 1 },
            cookies = { 'AUTH': token }
    )
    assert response.status_code == 200
    assert response.json()['id_sugestao'] == 2
    assert response.json()['feedback'] == 1

def test_usuario_sugestao_token_invalido_invalido():
    client = TestClient(getby)
    token = 'token_invalido'
    response = client.post(
            '/usuario_sugestao/',
            headers = { 'X-Token': 'coneofsilence' },
            json = { 'id_usuario': 0, 'id_sugestao': 2, 'feedback': 1 },
            cookies = { 'AUTH': token }
    )
    assert response.status_code == 403
    assert response.json() == { 'detail': 'Token inválido' }

def test_usuario_sugestao_sugestao_inexistente_invalido():
    client = TestClient(getby)
    response = client.post(
            '/login/',
            headers = { 'X-Token': 'coneofsilence' },
            json = { 'email': 'caio@gg.com', 'senha': '123' }
    )
    token = response.cookies['AUTH']
    response = client.post(
            '/usuario_sugestao/',
            headers = { 'X-Token': 'coneofsilence' },
            json = { 'id_usuario': 0, 'id_sugestao': 9999999, 'feedback': 1 },
            cookies = { 'AUTH': token }
    )
    assert response.status_code == 404
    assert response.json() == { 'detail': 'Sugestão não existe' }
