FROM node:erbium-alpine AS dependencies

COPY package.json ./
COPY src/ src/

RUN yarn install 

ENV PORT 8080
EXPOSE 8080

CMD yarn start
