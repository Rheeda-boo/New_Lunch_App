const express = require("express");
const router = express.Router();

const managerController = require("../controllers/manager");

router.get("/addfood", managerController.getaddFood);
router.post("/addfood", managerController.postaddFood);

router.get("/allfood", managerController.getAllFood);



module.exports = router;