FROM nginx:1.13.3-alpine

COPY ./target /usr/share/nginx/html
COPY ./static /usr/share/nginx/html
COPY ./.htpasswd /etc/nginx/.htpasswd
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/ /etc/nginx/conf.d/
