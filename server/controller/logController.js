const Web3 = require("web3");

const web3 = new Web3(process.env.WS_PROVIDER);

module.exports = {
  getLogs: async (req, res) => {
    try {
      const { action, fromBlock, toBlock, address, topic0 } = req.query;
      if (action === "getLogs") {
        const output = await web3.eth.subscribe(
          "logs",
          {
            fromBlock: fromBlock,
            address: address,
            topics: [topic0],
          },
          (err, result) => {
            if (err) {
              console.log(err);
              return res.status(400).json({
                status: "0",
                message: "error",
                result: err,
              });
            }
          }
        );
        await output.on("data", (log) => {
          return res.status(200).json({
            status: "1",
            message: "OK",
            result: log,
          });
        });
      } else {
        return res.status(400).send("improper request");
      }
    } catch (e) {
      console.log(e);
      return res.status(500).send("internal error");
    }
  },
};
