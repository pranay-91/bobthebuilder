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



FROM alpine:latest
RUN apk update && apk add --update ca-certificates nodejs nodejs-npm && rm -rf /var/cache/apk/*
WORKDIR /node
ADD package.json /node/
ADD index.js /node/
ADD Bob.js /node/
RUN npm install --production

ENTRYPOINT ["node", "index.js"]
