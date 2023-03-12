const express = require("express");
const userController = require("../controllers/user_controller");
const multer = require("multer");
const blogController = require("../controllers/Blog-controller");

const router = express.Router();
const upload = multer({ dest: "public/uploads" });

// router.post("/register", userController.register);
router.post("/signup", userController.register);
// router.delete("/users/:id", userController.deleteUser);
// router.post("/login", userController.login);
router.post("/blogs", blogController.createBlog);
router.delete("/blogs/:id", blogController.deleteBlog);
router.get("/blogs", blogController.getAllBlogs);
router.patch("/blogs/:id", upload.single("image"), blogController.updateBlog);

module.exports = router;
