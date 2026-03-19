# Etapa 1 — Build Angular
FROM node:20-alpine as build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --prod

# Etapa 2 — Servir com NGINX
FROM nginx:alpine
COPY --from=build /app/dist/projecto-final/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
