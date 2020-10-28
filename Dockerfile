FROM node:14

WORKDIR /martin-proxy

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD [ "npm", "start" ]