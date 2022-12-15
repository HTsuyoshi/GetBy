# syntax=docker/dockerfile:1.4

FROM python:3.10-slim

WORKDIR /usr/src/getby

COPY tests_requirements.txt ./
RUN pip install --no-cache-dir -r tests_requirements.txt

RUN useradd getby
USER getby

COPY ./src/ ./src/
COPY ./test/ ./test/

CMD pytest -vv -p no:cacheprovider
