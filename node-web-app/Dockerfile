# Specify a base image
FROM node:alpine

# Change the Wokring Directory
WORKDIR /usr/app

# Copy everything from the CWD (Current Working Dir)
# to the CWD inside the container
COPY ./ ./

# Install dependencies
RUN npm install 

# Default command
CMD ["npm", "start"]
