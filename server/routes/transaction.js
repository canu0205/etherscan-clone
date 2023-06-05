var express = require("express");
var router = express.Router();

const { checkStatus } = require("../controller/transactionController");

/* GET users listing. */
router.get("/", checkStatus);

module.exports = router;
