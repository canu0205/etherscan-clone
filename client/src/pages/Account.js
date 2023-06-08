import React from "react";
import Header from "../components/Header";
import { Link, useLocation } from "react-router-dom";
import Contract from "../components/Contract";
import Events from "../components/Events";

function Account({ balance, txStatus, abi, search }) {
  const location = useLocation();

  return (
    <div>
      <Header />
      <main className="grid-row-7 ml-40 grid h-screen">
        <section className="row-span-1 flex">
          <div className="mr-3 font-bold">Contract</div>
          <div>{search}</div>
        </section>
        <section className="row-span-2">
          <div className="w-5/6 rounded-lg border p-2">
            <h4 className="pb-3">Overview</h4>
            <div className="text-slate-400">ETH BALANCE</div>
            <div className="font-semibold">{balance} ETH</div>
          </div>
        </section>
        <section className="row-span-4">
          <div id="account_category">
            <nav>
              <Link
                to="/account#contract"
                className="mr-1 rounded-md border border-indigo-400 p-1"
              >
                Contract
              </Link>
              <Link
                to="/account#event"
                className="mr-1 rounded-md border border-indigo-400 p-1"
              >
                Events
              </Link>
            </nav>
          </div>
          <div>
            {location.hash === "#event" ? (
              <Events search={search} />
            ) : (
              <Contract abi={abi} />
            )}
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default Account;
