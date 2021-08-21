FROM node:14-alpine
RUN apk add --no-cache python g++ make
WORKDIR /nodejs-docker-kubernetes
COPY . .
RUN yarn install --production
CMD [ "node", "server.js"]