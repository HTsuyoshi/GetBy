# syntax=docker/dockerfile:1

FROM python:3.10-slim

WORKDIR /usr/src/getby

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

RUN useradd getby
USER getby

COPY . .

CMD [ "main:getby" ]
ENTRYPOINT [ "uvicorn" ]
