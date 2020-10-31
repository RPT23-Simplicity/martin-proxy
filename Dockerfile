FROM node:14

WORKDIR /martin-proxy/src/app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

ENV PORT=80

EXPOSE 80

CMD [ "npm", "start" ]