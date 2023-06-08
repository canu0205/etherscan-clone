import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Account from "./pages/Account";
import Contract from "./components/Contract";
import Events from "./components/Events";

function App() {
  const [search, setSearch] = useState("");
  const [balance, setBalacne] = useState(0);
  const [txStatus, setTxStatus] = useState(false);
  const [abi, setAbi] = useState();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              search={search}
              setSearch={setSearch}
              setBalacne={setBalacne}
              setTxStatus={setTxStatus}
              setAbi={setAbi}
            />
          }
        ></Route>
        <Route
          path="/account"
          element={
            <Account
              balance={balance}
              txStatus={txStatus}
              abi={abi}
              search={search}
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
