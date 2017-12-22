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

#FROM ubuntu

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
#
#
#CMD [ "npm", "run", "rest-api" ]



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
### Build the angular app in production mode and store the artifacts in dist folder
#RUN $(npm bin)/ng build --prod --build-optimizer
#
#
#### STAGE 2: Setup ###
#
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
#
#
#
#EXPOSE 8090 80 4200 3000
#
#CMD ["nginx", "-g", "daemon off;"]
#CMD [ "npm", "run", "rest-api" ]



# ---- Base Node ----
FROM alpine:3.5 AS base

# install node
RUN apk add --no-cache nodejs-current tini
# set working directory
WORKDIR /root/chat
# Set tini as entrypoint
ENTRYPOINT ["/sbin/tini", "--"]
# copy project file
COPY package.json .

#
# ---- Dependencies ----
FROM base AS dependencies
# install node packages
RUN npm set progress=false && npm config set depth 0
RUN npm install --only=production
# copy production node_modules aside
RUN cp -R node_modules prod_node_modules
# install ALL node_modules, including 'devDependencies'
RUN npm install

#
# ---- Test ----
# run linters, setup and tests
#FROM dependencies AS test
#COPY . .
#RUN  npm run lint && npm run setup && npm run test

#
# ---- Release ----
FROM base AS release
# copy production node_modules
COPY --from=dependencies /root/chat/prod_node_modules ./node_modules
# copy app sources
COPY . .
# expose port and define CMD


EXPOSE 8090
EXPOSE 4200

CMD npm run start
CMD npm run rest-api