const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");

router.get("/login", userController.getLogin);
// router.get("/logout", userController.getLogout);
router.get("/signup", userController.getSignUp);
router.post("/login", userController.postLogin);
// router.post("/logout", userController.postLogout);
router.post("/signup", userController.postSignUp);



module.exports = router;