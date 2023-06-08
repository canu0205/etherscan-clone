import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Main({ search, setSearch, setBalacne, setTxStatus, setAbi }) {
  const handleSearch = (value) => {
    setSearch(value);
  };

  const searchBtn = async (e) => {
    // e.preventDefault();
    if (search.length === 42) {
      const bal = await axios({
        method: "get",
        url: "http://localhost:8080/account",
        params: {
          action: "balance",
          address: search,
        },
      });
      setBalacne(bal.data.result / 10 ** 18);
      const contract = await axios({
        method: "get",
        url: "http://localhost:8080/contract",
        params: {
          action: "getabi",
          address: search,
        },
      });
      setAbi(contract.data.result);
    } else if (search.length === 66) {
      const txStat = await axios({
        method: "get",
        url: "http://localhost:8080/transaction",
        params: {
          action: "gettxreceiptstatus",
          txhash: search,
        },
      });
      console.log(txStat.data.result.status);
      setTxStatus(txStat.data.result.status);
    } else {
      e.preventDefault();
      alert("improper request@@");
    }
  };

  return (
    <div>
      <Header />
      <main>
        <div className="grid h-screen place-content-center">
          <form id="searchBox" className="">
            <label htmlFor="searchValue" className="block">
              The Ethereum Blockchain Explorer
            </label>
            <input
              id="searchValue"
              className="w-3/4 rounded-md border border-gray-300"
              value={search}
              placeholder="Search by Address / TxHash"
              onChange={(e) => handleSearch(e.target.value)}
            ></input>
            <Link to="/account">
              <button
                onClick={(e) => searchBtn(e)}
                className="w-1/4 rounded-md border border-gray-300"
              >
                Search
              </button>
            </Link>
          </form>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default Main;
