const { Router } = require("express");
const { getAllUsers } = require("../controller/userController.js");
const route = Router();

route.get("/get-all-users/:id", getAllUsers);
//http://localhost:3000/api/users/get-all-users/<id>

module.exports = route;