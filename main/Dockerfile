# Build stage for frontend
FROM node:20-alpine AS frontend-builder

WORKDIR /app

COPY package*.json ./
RUN npm ci --legacy-peer-deps

COPY . .
RUN npm run build

# Build stage for backend
FROM node:20-alpine AS backend-builder

WORKDIR /app

COPY package*.json ./
RUN npm ci --legacy-peer-deps

COPY . .
RUN npx prisma generate

# Production stage
FROM node:20-alpine AS production

WORKDIR /app

# Install runtime dependencies for Prisma and tsx
RUN apk add --no-cache openssl

COPY package*.json ./
RUN npm ci --legacy-peer-deps && npm cache clean --force

# Copy built assets from frontend builder
COPY --from=frontend-builder /app/dist ./dist

# Copy server files and generated Prisma client
COPY --from=backend-builder /app/server ./server
COPY --from=backend-builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=backend-builder /app/prisma ./prisma

# Copy uploads directory
RUN mkdir -p uploads

EXPOSE 3001

ENV NODE_ENV=production
ENV PORT=3001

CMD ["npx", "tsx", "server/index.ts"]
