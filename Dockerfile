# 1. Install dependencies
FROM node:20-alpine AS deps

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

# 2. Build the app
FROM node:20-alpine AS builder

WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules

RUN npm run build

# 3. Final image to run the built app
FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/src ./src

ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]
