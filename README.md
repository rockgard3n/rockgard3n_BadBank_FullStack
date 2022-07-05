# BadBankApp
## The refactoring - updating an exclusive front end SPA to a three tier application

## To Run

1. Clone this repo
2. run `docker-compose up --build`
3. go to [127.0.0.1:3001`](127.0.0.1:3001)
4. BOOM! it should work


## CLI process I used to build the app
npm init -y
npm install express
npm install cors
node index.js
### docker image for mongodb 
docker run -p 27017:27017 --name badbank -d mongo

DAL.js - a data abstraction layer 

## Useful commands

to get to the docker container's bash shell, you will need to change `rockgard3n_badbank_fullstack_badbank_back_1` to the name of the container you want to connect to. this is useful to troubleshoot file location and container file structure.
```
docker exec -it -e COLUMNS=`tput cols` -e LINES=`tput lines` rockgard3n_badbank_fullstack_badbank_back_1 bash
```

