FROM node
LABEL MAINTAINER="Robert Wells <rwells@dvele.com>"

RUN mkdir app
WORKDIR /app
COPY front/package.json /app/

ENV NODE_ENV=development

RUN npm install

WORKDIR /app

# So docker is not being run as a root user
RUN chown -R node:node /app

COPY /front/package.json /app/