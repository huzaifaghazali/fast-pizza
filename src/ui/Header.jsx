import React from 'react'
import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder';

function Header() {
  return (
    <header>
      <Link to='/'>Fast React PIzza Co.</Link>

      <SearchOrder />
      <p>Huzaifa</p>
    </header>
  );
}

export default Header