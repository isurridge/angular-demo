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



### STAGE 1: Build ###

FROM ubuntu



#  Create a new image from the base nodejs 7 image.
FROM node:7
# Create the target directory in the imahge
RUN mkdir -p /usr/src/app
# Set the created directory as the working directory
WORKDIR /usr/src/app
# Copy the package.json inside the working directory
COPY package.json /usr/src/app
# Install required dependencies
RUN npm install
# Copy the client application source files. You can use .dockerignore to exlcude files. Works just as .gitignore does.
COPY . /usr/src/app
# Open port 4200. This is the port that our development server uses

EXPOSE 4200 3000 8090 80 8080

# Start the application. This is the same as running ng serve.
CMD ["npm", "start"]

# We label our stage as 'builder'
#FROM node:8-alpine as builder
#
#COPY package.json ./
#
#RUN npm set progress=false && npm config set depth 0 && npm cache clean --force
#
### Storing node modules on a separate layer will prevent unnecessary npm installs at each build
#RUN npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app
#
#WORKDIR /ng-app
#
#COPY . .
#
##RUN $(npm bin)/ng build --prod --build-optimizer
#CMD ["ng serve",  "--proxy-config proxy.conf.json"]




#FROM node:8-alpine
#
#COPY package.json ./
#
#RUN npm set progress=false && npm config set depth 0 && npm cache clean --force
#
### Storing node modules on a separate layer will prevent unnecessary npm installs at each build
#RUN npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app
#
#WORKDIR /ng-app


#CMD [ "npm", "run", "rest-api" ]




## Build the angular app in production mode and store the artifacts in dist folder


#RUN $(npm bin)/ng build --proxy-config proxy.conf.json




### STAGE 2: Setup ###

#FROM nginx:1.13.3-alpine
#
### Copy our default nginx config
#COPY nginx/default.conf /etc/nginx/conf.d/
#
### Remove default nginx website
#RUN rm -rf /usr/share/nginx/html/*
#
### From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
#COPY --from=builder /ng-app/dist /usr/share/nginx/html
#CMD ["nginx", "-g", "daemon off;"]

