FROM node:16.15.0-alpine3.15
WORKDIR /usr/src/app
COPY . .
RUN yarn i
RUN yarn build

CMD yarn start

