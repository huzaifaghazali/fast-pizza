import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="bg-yellow-500 uppercase">
      <Link className="tracking-widest" to="/">
        Fast React PIzza Co.
      </Link>

      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
