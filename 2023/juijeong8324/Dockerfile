FROM node:20-alpine3.17
LABEL name=juijeong8324 email=juijeong8324@gmail.com

WORKDIR /app
COPY package*.json /app
RUN npm install --production
COPY . /app

EXPOSE 8080
CMD ["npm", "start"]