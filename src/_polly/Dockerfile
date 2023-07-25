FROM node:16-bullseye-slim

WORKDIR /app
COPY bundler/package.json bundler/yarn.lock ./
RUN yarn install
COPY bundler .
RUN npm run build && yarn install --production

FROM node:16-bullseye-slim

WORKDIR /app
COPY components/package.json components/yarn.lock ./
RUN yarn install
COPY components .
RUN npm run build && mv dist/* . && yarn install --production

FROM node:16-bullseye-slim

WORKDIR /polly

# Needed for the generated codes by @polly/bundler
RUN npm i --global serve
RUN npm i --no-save react-router-dom@6.3.0

COPY --from=0 /app ./node_modules/@polly/bundler
COPY --from=1 /app ./node_modules/@polly/components

COPY __test__ ./test

ENV NODE_ENV='testing'

EXPOSE 5000

CMD [ "bash", "-c", "node test/mod.js && serve -p 5000 test/output/dist" ]
