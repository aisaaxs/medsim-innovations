FROM node:23 AS base

WORKDIR /app
COPY package*.json ./
FROM base AS dev
ENV NODE_ENV=development
RUN npm install
COPY . .
EXPOSE 3000
CMD npm run dev