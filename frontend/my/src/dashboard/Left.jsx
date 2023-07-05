import React from 'react';
import { NavLink } from 'react-router-dom';


function Left() {
  return (
    <div className="left-sidebar">
      <h3>Left Sidebar</h3>
      <ul>
      
        <li> <NavLink className="navbar-brand" to="/Brand">Brand</NavLink></li>
        <li> <NavLink className="navbar-brand" to="/Cart">Cart</NavLink></li>
        <li> <NavLink className="navbar-brand" to="/Category">Category</NavLink></li>
        <li><NavLink className="navbar-brand" to="/Items">Items</NavLink></li>
        <li><NavLink className="navbar-brand" to="/Staff">Staff</NavLink></li>
      </ul>
    </div>
  );
}

export default Left;
