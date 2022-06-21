FROM node:17-alpine

WORKDIR /app

RUN apk add --update --no-cache \
    make \
    g++ \
    jpeg-dev \
    cairo-dev \
    giflib-dev \
    pango-dev \
    libtool \
    autoconf \
    automake

COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
