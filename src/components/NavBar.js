import React from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavBar = () => (
  <nav className="navbar navbar-expand-lg  bg">
    <div className="container">

      <NavLink className="nav-Link logo" to="/">
        {/* <img src="../components/planet.png" alt="Logo Img" /> */}
        Space Travelers Hub
      </NavLink>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <GiHamburgerMenu />
      </button>
      <div className="collapse   navbar-collapse" id="navbarNav">
        <ul className="navbar-nav col-12">
          <li className="nav-item bdr  d-flex align-items-center">
            <NavLink className="nav-Link pt-1" to="/">Rockets</NavLink>
          </li>
          <li className="nav-item bdr d-flex align-items-center">
            <NavLink className="nav-Link categories pt-1" to="/missions">Missions</NavLink>
          </li>
          <li className="nav-item bdr d-flex align-items-center">
            <NavLink className="nav-Link categories pt-1" to="/profile">My Profile</NavLink>
          </li>

        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;