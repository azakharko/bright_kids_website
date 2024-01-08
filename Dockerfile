FROM node:16.1 as build

WORKDIR /app

COPY package*.json .
RUN npm install
COPY . .
RUN npm build

FROM nginx:1.19

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /usr/share/nginx/html