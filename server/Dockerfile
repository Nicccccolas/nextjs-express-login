FROM node:18-alpine

# Create app directory
WORKDIR /user/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json and package-lock.json are copied
# where available (npm@5+)
COPY package.json ./

RUN npm install
# If you are building your code for production
# RUN nom ci --only=production

# Bundle app source
COPY . .

EXPOSE $PORT
CMD ["npm", "run", "dev"]
