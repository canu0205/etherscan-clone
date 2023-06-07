var express = require("express");
var router = express.Router();

const { getContract } = require("../controller/contractController");

/* 
    GET contract abi or source code
    /contract?action={getabi||getsourcecode}&address={address}
*/
router.get("/", getContract);

module.exports = router;
