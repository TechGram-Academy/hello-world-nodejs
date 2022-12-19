FROM node:18

WORKDIR /usr/src/app

COPY . .
RUN npm install
EXPOSE 5001
CMD [ "node", "app.js" ]