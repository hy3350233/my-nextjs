FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# ✅ Generate Prisma client before build
RUN npx prisma generate

# ✅ Now build Next.js app
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
