const express = require('express');
const routes = require("./src/routes");

class Server {
    constructor() {
        this.app = express()
        this.init()
    }
    init() {
        this.middleware()
        this.routes()
        this.app.listen(3333, () => {
            console.log("Server in port 3333")
        })
    }
    middleware() {
        this.app.use(express.json())
    }
    routes() {
        this.app.use(routes)
    }
    database() {

    }
};

new Server()