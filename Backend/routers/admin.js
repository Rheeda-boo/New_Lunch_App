const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin");

router.get("/adduser", adminController.getAddUser);
router.post("/adduser", adminController.postAddUser);

// router.get("/signup", adminController.getSignUp);
// router.post("/login", adminController.postLogin);
// router.post("/signup", adminController.postSignUp);



module.exports = router;