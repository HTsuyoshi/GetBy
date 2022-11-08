# syntax=docker/dockerfile:1

FROM python:3.10-slim

WORKDIR /usr/src/getby

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD [ "--port", "8000", "--reload" ]
ENTRYPOINT [ "uvicorn", "main:getby" ]
