FROM node:17-alpine

WORKDIR /app

RUN apt-get update && apt-get install libcairo-dev -y
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
