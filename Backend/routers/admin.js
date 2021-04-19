const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin");

router.get("/adduser", adminController.getAddUser);
router.post("/adduser", adminController.postAddUser);

router.get("/allusers", adminController.getAllUsers);

router.get("/coupons", adminController.getAddCoupon);
router.post("/addcoupons", adminController.postAddCoupon);
router.post("/coupons", adminController.postRandomCoupon);

router.post("/validate", adminController.postValidateCoupon);



// router.post("/login", adminController.postLogin);
// router.post("/signup", adminController.postSignUp);


module.exports = router;