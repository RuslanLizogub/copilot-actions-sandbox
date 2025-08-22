# syntax=docker/dockerfile:1
# Stage 1: build
FROM node:22 AS build
WORKDIR /opt/app

# Устанавливаем зависимости по lock-файлу
COPY package*.json ./
RUN npm ci

# Копируем исходники и собираем
COPY . .
RUN npm run build --prod

# Stage 2: runtime (только прод-зависимости + собранный dist)
FROM node:22
ENV NODE_ENV=production
WORKDIR /opt/app

COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=build /opt/app/dist ./dist

CMD ["node", "./dist/main.js"]