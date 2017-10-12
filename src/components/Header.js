import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <div className="bounds">

      <NavLink className="header--logo" to="/">Test test</NavLink>
    </div>
  </div>
);

export default Header;
