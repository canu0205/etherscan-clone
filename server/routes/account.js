var express = require("express");
var router = express.Router();

const { getEthBal } = require("../controller/accountController");

/* /account?action={balance||balancemulti}&address={address} */
router.get("/", getEthBal);

module.exports = router;
