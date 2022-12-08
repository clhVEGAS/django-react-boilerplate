FROM node:16.15.1

COPY . .

WORKDIR /base_ui

RUN npm install

ENV NODE_ENV production

EXPOSE 3000

CMD ["npm", "run", "build"]