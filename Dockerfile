FROM node:18-alpine

WORKDIR /app

COPY . ./

RUN npm i --prod

RUN npm i webpack webpack-node-externals tsconfig-paths-webpack-plugin -D

RUN npm run build

RUN npm uninstall webpack webpack-node-externals tsconfig-paths-webpack-plugin

COPY dist ./dist

CMD [ "yarn", "start" ]
