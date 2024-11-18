const { Router } = require("express");
const { getUser, createUser, updateUser, deleteUser } = require("../controller/userController.js");

const userRoutes = Router();

userRoutes.get("/", getUser);
userRoutes.post("/", createUser);
userRoutes.put("/:id", updateUser);
userRoutes.delete("/:id", deleteUser);

module.exports = userRoutes;