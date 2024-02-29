const express = require("express");

const UserController = require("../controller/users");

const router = express.Router();

// POST - CREATE
router.post("/create", UserController.createNewUsers);

// READ - GET
router.get("/", UserController.getAllUsers);

// UPDATE - PATCH
router.patch("/update/:id", UserController.updateUsers);

// DELETE - DELETE
router.delete("/delete/:id", UserController.deleteUsers);

module.exports = router;
