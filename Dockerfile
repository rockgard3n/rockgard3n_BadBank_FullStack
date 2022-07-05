FROM --platform=linux/amd64 node:14.17.0-alpine
ENV PORT 3001

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app/
RUN npm install

EXPOSE 3001

CMD ["npm", "start"]