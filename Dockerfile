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

# We label our stage as 'builder'
FROM node:8-alpine as builder

COPY package.json ./

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app

WORKDIR /ng-app

COPY . .

## Build the angular app in production mode and store the artifacts in dist folder


RUN $(npm bin)/ng build --prod --build-optimizer





### STAGE 2: Setup ###

FROM nginx:1.13.3-alpine

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /ng-app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]


#RUN npm run rest-api