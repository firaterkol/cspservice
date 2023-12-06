FROM node:18.15.0-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npx ngcc --properties es2023 browser module main --first-only --create-ivy-entry-point
COPY . .
RUN npm run build

FROM nginx:stable
COPY --from=build /app/dist/cspui/ /usr/share/nginx/html
EXPOSE 80
