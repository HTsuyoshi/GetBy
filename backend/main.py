from fastapi import FastAPI

getby = FastAPI()

@getby.router.get('/')
def hello_world() -> str:
    return 'hello_world'
