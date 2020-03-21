FROM node:12.16.1-alpine as build
WORKDIR /app
COPY package.json yarn.lock /app/
RUN npm install --silent
COPY . /app/
RUN npm run build

FROM nginx:1.17.9-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
