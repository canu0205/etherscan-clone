const Web3 = require("web3");

const web3 = new Web3(process.env.HTTP_PROVIDER);

module.exports = {
  getEthBal: async (req, res) => {
    const { action, address } = req.query;
    try {
      if (action === "balance") {
        const result = await web3.eth.getBalance(address);
        return res.status(200).json({
          status: 1,
          message: "ok",
          result: result,
        });
      } else if (action === "balancemulti") {
        const addrs = address.split(",");
        const result = await Promise.all(
          addrs.map(async (addr) => {
            const bal = await web3.eth.getBalance(addr);
            return { account: addr, balance: bal };
          })
        );
        return res.status(200).json({
          status: 1,
          message: "ok",
          result: result,
        });
      } else {
        res.status(400).send("improper action request");
      }
    } catch (e) {
      console.log(e);
      return res.status(500).send("internal error");
    }
  },
};
