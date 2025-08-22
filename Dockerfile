# syntax=docker/dockerfile:1

ARG NODE_VERSION=18
FROM node:${NODE_VERSION} AS build
WORKDIR /opt/app

# Ставим зависимости по lock-файлу
COPY package*.json ./
RUN npm ci

# Копируем исходники и собираем
COPY . .
RUN npm run build

# Runtime-слой: только прод-зависимости + dist
FROM node:${NODE_VERSION}
ENV NODE_ENV=production
WORKDIR /opt/app

COPY package*.json ./
RUN npm ci --omit=dev

COPY --from=build /opt/app/dist ./dist

CMD ["node", "dist/main.js"]