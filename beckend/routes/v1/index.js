const express = require("express");
const userController = require("../../controllers/user_controller");

const router = express.Router();

router.post("/city", userController.create);

module.exports = router;
