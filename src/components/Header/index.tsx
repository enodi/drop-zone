import React from 'react';
import { Link } from "react-router-dom";

const Header: React.FC = () => (
  <header className='header'>
    <Link to='/' className='logo'>
      <span>DROP</span>
      <span>ZONE</span>
    </Link>
  </header>
);

export default Header;