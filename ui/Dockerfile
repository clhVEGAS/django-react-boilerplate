# frontend/Dockerfile

# pull official base image
FROM node:alpine

# set working directory
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install
RUN npm install react-scripts -g
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . .

# start app
CMD ["npm", "start"]
