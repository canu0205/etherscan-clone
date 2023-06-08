import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/">
        <header>
          <h1 className="ml-40 pb-5 pt-5">Etherscan</h1>
        </header>
      </Link>
    </div>
  );
}

export default Header;
