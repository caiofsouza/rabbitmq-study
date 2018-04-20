FROM node:alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install -g yarn --silent
RUN yarn install --production
CMD [ "yarn", "start" ]
EXPOSE 3000
