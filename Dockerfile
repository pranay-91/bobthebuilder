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


FROM alpine:latest
RUN apk update && apk add ca-certificates nodejs && rm -rf /var/cache/apk/*
WORKDIR /node
ADD package.json /node/
ADD index.js /node/
ADD Bob.js /node/
RUN npm install

<<<<<<< HEAD
ENTRYPOINT ["node", "index.js"]
=======
CMD ["node","index.js"]
>>>>>>> ce04d5a87952fc38f54047edd3878763f230e42c
