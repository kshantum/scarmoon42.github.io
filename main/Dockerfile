# Build stage for frontend
FROM node:20-alpine AS frontend-builder

WORKDIR /app

COPY package*.json ./
# Игнорируем скрипты при установке, чтобы не запустился prisma generate
RUN npm install --legacy-peer-deps --ignore-scripts

COPY . .
RUN npm run build

# Build stage for backend
FROM node:20-alpine AS backend-builder

WORKDIR /app

COPY package*.json ./
COPY prisma/schema.prisma ./prisma/schema.prisma
RUN npm install --legacy-peer-deps

COPY . .
RUN npx prisma generate

# Production stage
FROM node:20-alpine AS production

WORKDIR /app

# Install runtime dependencies for Prisma and tsx
RUN apk add --no-cache openssl

COPY package*.json ./
RUN npm install --legacy-peer-deps --ignore-scripts && npm cache clean --force

# Copy built assets from frontend builder
COPY --from=frontend-builder /app/dist ./dist

# Copy server files and generated Prisma client
COPY --from=backend-builder /app/server ./server
COPY --from=backend-builder /app/prisma ./prisma
COPY --from=backend-builder /app/node_modules/@prisma/client ./node_modules/@prisma/client

# Copy uploads directory
RUN mkdir -p uploads

EXPOSE 3001

ENV NODE_ENV=production
ENV PORT=3001

CMD ["npx", "tsx", "server/index.ts"]
