# Etapa de construcción
FROM node:18-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa de producción
FROM node:18-alpine

WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/build ./build
RUN npm install --production

ENV PORT=3000
EXPOSE 3000

CMD ["npm", "start"]