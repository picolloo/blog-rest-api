FROM node:12

WORKDIR /var/app/current

COPY package*.json .

RUN yarn

COPY . .

EXPOSE 8080

CMD ["yarn", "start"]
