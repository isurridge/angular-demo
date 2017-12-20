#FROM alpine:3.4
#
#RUN apk --update add nginx php5-fpm && \
#    mkdir -p /var/log/nginx && \
#    touch /var/log/nginx/access.log && \
#    mkdir -p /run/nginx
#
#ADD www /www
#ADD nginx.conf /etc/nginx/
#ADD php-fpm.conf /etc/php5/php-fpm.conf
#
#EXPOSE 80
#CMD php-fpm -d variables_order="EGPCS" && (tail -F /var/log/nginx/access.log &) && exec nginx -g "daemon off;"



 # Create image based on the official Node 6 image from the dockerhub
FROM node:6

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json /usr/src/app

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /usr/src/app

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]