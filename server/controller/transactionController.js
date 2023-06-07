const Web3 = require("web3");

const web3 = new Web3(process.env.HTTP_PROVIDER);

module.exports = {
  checkStatus: async (req, res) => {
    const { action, txhash } = req.query;
    try {
      if (action === "getstatus") {
        const result = await web3.eth.getTransactionReceipt(txhash);
        return res.status(200).json({
          status: 1,
          message: "ok",
          result: {
            isError: `${!result.status}`,
            errDescription: "",
          },
        });
      } else if (action === "gettxreceiptstatus") {
        const result = await web3.eth.getTransactionReceipt(txhash);
        return res.status(200).json({
          status: 1,
          message: "ok",
          result: {
            status: `${result.status}`,
          },
        });
      } else {
        return res.status(400).send("improper action request");
      }
    } catch (e) {
      console.log(e);
      return res.status(500).send("internal server error");
    }
  },
};
