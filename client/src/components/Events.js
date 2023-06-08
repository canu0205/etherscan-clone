import React, { useEffect, useState } from "react";
import axios from "axios";

function Events({ search }) {
  const [logs, setLogs] = useState({});

  const cb = async () => {
    const result = await axios({
      method: "get",
      url: "http://localhost:8080/log",
      params: {
        action: "getLogs",
        fromBlock: 1092029,
        toBlock: "latest",
        address: `${search}`,
        topic0:
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
      },
    });
    console.log(result.data.result.topics);
    setLogs(result.data.result);
  };

  useEffect(() => {
    cb();
  }, [search]);

  return (
    <div className="mt-3 w-5/6 rounded-lg border p-2">
      <h5>Event log</h5>
      <div className="mt-2 bg-slate-200">
        <div className="max-h-96 overflow-auto">
          <ul>
            <li>adress: {logs.address}</li>
            <li>blockHash: {logs.blockHash}</li>
            <li>blockNumber: {logs.blockNumber}</li>
            <li>data: {logs.data}</li>
            {/* <li>
              topics:
              {logs.topcis.map((el) => {
                return <li>{el}</li>;
              })}
            </li> */}
            <li>transactionHash: {logs.transactionHash}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Events;
