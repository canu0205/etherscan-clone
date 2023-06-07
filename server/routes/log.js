var express = require("express");
var router = express.Router();

const { getLogs } = require("../controller/logController");

/* 
    /log?action={getLogs}&fromBlock={blockNumber}&toBlock={latest}
    &address={address}&topic0={}[&topic0_1_opr={and||or}&topic1={}&...]
*/
router.get("/", getLogs);

module.exports = router;
