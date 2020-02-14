const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./src/routes');

class Server {
  constructor() {
    this.app = express();
    this.init();
  }

  init() {
    this.middleware();
    this.routes();
    this.app.listen(3333, () => {
      console.log('Server in port 3333');
    });
  }

  middleware() {
    this.app.use(bodyParser.json());
  }

  routes() {
    routes.forEach((route) => this.app.use(route));
  }

  database() {

  }
}

new Server();
