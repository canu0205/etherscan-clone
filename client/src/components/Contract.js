import React from "react";

function Contract({ abi }) {
  return (
    <div className="mt-3 w-5/6 rounded-lg border p-2">
      <h5>Contract ABI</h5>
      <div className="mt-2 bg-slate-200">
        <div className="max-h-96 overflow-auto">{abi}</div>
      </div>
    </div>
  );
}

export default Contract;
