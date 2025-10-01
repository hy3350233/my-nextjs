FROM node:18-bullseye

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# ✅ Generate Prisma client
RUN npx prisma generate

# ❌ Ye hata diya (DB build ke time chahiye hi nahi)
# RUN npm run build

EXPOSE 3000

# ✅ Ab runtime pe build + start dono ek sath hoga
CMD ["sh", "-c", "npm run build && npm start"]
