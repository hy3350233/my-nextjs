FROM node:18-bullseye

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# ✅ Generate Prisma client
RUN npx prisma generate

# ✅ Dummy DATABASE_URL build ke time ke liye
# Ye sirf build stage me use hoga
ENV DATABASE_URL="postgresql://postgres:postgres@localhost:5432/mydb"

# ✅ Build Next.js (ab DB connect error nahi aayega)
RUN npm run build

EXPOSE 3000

# ✅ Runtime pe docker-compose ka .env use hoga
CMD ["npm", "start"]
