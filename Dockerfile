FROM node:14
ENV PORT 3000

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app/
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]