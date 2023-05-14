FROM node:18-alpine

WORKDIR /app

COPY . ./

RUN npm install

CMD [ "npm", "run", "service" ]

EXPOSE 5000