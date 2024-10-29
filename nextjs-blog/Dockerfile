FROM node:18-alpine AS base


WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

EXPOSE 3000

FROM base AS builder

RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine AS production

WORKDIR /app


COPY package*.json ./
RUN npm ci --only=production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js

RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001
USER nextjs

# Start the app
CMD ["npm", "start"]

FROM base AS dev

ENV NODE_ENV=development

RUN npm install


COPY . .


CMD ["npm", "run", "dev"]
