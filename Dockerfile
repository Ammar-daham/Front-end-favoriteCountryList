FROM node:12-alpine

WORKDIR /app

COPY package*.json .
RUN yarn install

COPY . .

# RUN npm run build
# RUN npm install -g serve

CMD ["yarn", "start"]
