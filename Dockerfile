FROM node:18 as build

WORKDIR /app

COPY package*.json .
RUN apt-get update
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install nodejs
RUN apt-get install npm
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.19

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 3000