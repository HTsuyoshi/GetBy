import sys
sys.path.append('.')
sys.path.append('./src/')

from fastapi.testclient import TestClient
from src.main import getby

client = TestClient(getby)

def test_vivo():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == { "message": "active" }
