# FROM node:latest
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app
#
# COPY package.json /usr/src/app
# RUN npm install
#
# COPY . /usr/src/app
#
# CMD ["npm", "start"]
#



#FROM alpine:latest
#RUN mkdir -p /node
#RUN apk update && apk add --update ca-certificates nodejs nodejs-npm && rm -rf /var/cache/apk/*
#WORKDIR /node
#COPY package.json /node
#RUN npm install
#COPY . /node
#WORKDIR  /node
#RUN ls


#ENTRYPOINT ["ls"]
FROM alpine:latest

RUN echo "@testing http://dl-4.alpinelinux.org/alpine/edge/testing" | tee -a /etc/apk/repositories

RUN apk update && \
  apk add \
    ca-certificates \
    nodejs \
    nodejs-npm \
    && \
  rm -rf \
    /var/cache/apk/*

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app

RUN npm install
ADD . /usr/src/app
COPY  . /usr/src/app
RUN ls

CMD ["node", "index.js"]
