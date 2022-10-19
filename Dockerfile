FROM node:19

WORKDIR /app
COPY . ./


RUN npm install

COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]

