const express = require("express");

const { RegisterUser } = require("../controllers/user_controller");

const router = express.Router();
router.post("/Register", RegisterUser);

module.exports = router;
