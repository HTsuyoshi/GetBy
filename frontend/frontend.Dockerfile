# syntax=docker/dockerfile:1.4

FROM node:16 AS development

WORKDIR /getby

COPY package.json /getby/package.json
COPY package-lock.json /getby/package-lock.json

RUN [ "npm", "install" ]

COPY . /getby

ENV CI=true
ENV PORT=3000

CMD [ "npm", "start" ]


FROM development AS build

RUN [ "npm", "run", "build" ]

FROM development as dev-envs
RUN <<EOF
apt-get update
apt-get install -y --no-install-recommends git
EOF

RUN <<EOF
useradd -s /bin/bash -m vscode
groupadd docker
usermod -aG docker vscode
EOF

COPY --from=gloursdocker/docker / /
CMD [ "npm", "start" ]


FROM nginx:alpine


COPY --from=build /getby/.nginx/nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy static assets from builder stage
COPY --from=build /getby/build .

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
