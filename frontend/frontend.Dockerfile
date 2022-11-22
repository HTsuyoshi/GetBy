# syntax=docker/dockerfile:1.4

FROM node:16 AS build

WORKDIR /getby

COPY package.json /getby/package.json
COPY package-lock.json /getby/package-lock.json

RUN [ "npm", "install" ]

COPY . /getby

ENV CI=true
ENV PORT=3000

RUN [ "npm", "run", "build" ]

FROM nginx:alpine

COPY --from=build /getby/.nginx/nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy static assets from builder stage
COPY --from=build /getby/build .

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
