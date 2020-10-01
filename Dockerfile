FROM node:erbium-alpine AS dependencies

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

COPY package.json yarn.lock ./
COPY src/ src/

RUN yarn install 

ENV PORT 8080
EXPOSE 8080

CMD yarn start
