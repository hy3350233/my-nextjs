FROM node:18-bullseye

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# ✅ Generate Prisma client
RUN npx prisma generate

# ✅ Build Next.js
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
