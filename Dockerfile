# Stage 1

FROM node:18-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod

# Stage 2
FROM nginx:alpine
COPY --from=build-step /app/dist/taco-angular /usr/share/nginx/html
EXPOSE 80

