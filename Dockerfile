FROM node:latest-alpine

WORKDIR /react_experience
COPY . .

RUN npm install

CMD [ "npm", "start" ]




