var express = require("express");
var router = express.Router();

const { getContract } = require("../controller/contractController");

/* GET users listing. */
router.get("/", getContract);

module.exports = router;
