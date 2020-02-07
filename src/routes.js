const { Router } = require("express");
const routes = Router()
const controllersUsers = require("./controllers/user");

routes.get("/", controllersUsers.index);
routes.post("/", controllersUsers.store);
routes.put("/:id", controllersUsers.update);
routes.delete("/:id", controllersUsers.destroy);
routes.get("/:id", controllersUsers.show);

module.exports = routes