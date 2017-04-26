FROM node:5.10.0
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app
RUN cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
RUN echo "Asia/Shanghai" > /etc/timezone

COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app

EXPOSE 80

ENTRYPOINT npm start
