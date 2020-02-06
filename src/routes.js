const { Router } = require("express");
const routes = Router();
const controllersUser = require("./controllers/user");

routes.get("/", controllersUser.index);
routes.post("/");
routes.delete("/:id");
routes.put("/:id");
routes.get("/show/:id");

module.exports = routes