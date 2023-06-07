const axios = require("axios");
const Web3 = require("web3");

const web3 = new Web3(process.env.HTTP_PROVIDER);

module.exports = {
  getContract: async (req, res) => {
    try {
      const { action, address } = req.query;
      if (action === "getabi") {
        const output = await axios({
          method: "get",
          url: `https://api-sepolia.etherscan.io/api?module=contract&action=${action}&address=${address}&apikey=${process.env.ETHERSCAN_API_KEY}`,
        });
        const { status, message, result } = await output.data;
        return res.status(200).json({
          status,
          message,
          result,
        });
      } else if (action === "getsourcecode") {
        const output = await axios({
          method: "get",
          url: `https://api-sepolia.etherscan.io/api?module=contract&action=${action}&address=${address}&apikey=${process.env.ETHERSCAN_API_KEY}`,
        });
        const { status, message, result } = await output.data;
        return res.status(200).json({
          status,
          message,
          result,
        });
      } else {
        return res.status(400).send("improper request");
      }
    } catch (e) {
      console.log(e);
      return res.status(500).send("internal server error");
    }
  },
};
