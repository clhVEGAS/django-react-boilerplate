FROM node:16.15.1

WORKDIR /base_ui

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "build"]