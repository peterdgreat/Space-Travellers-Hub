import React from 'react';
import '../css/NavBar.css';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import { GiHamburgerMenu } from 'react-icons/gi';
import planet from './planet.png';

const NavBar = () => (
  <nav className="navbar navbar-expand-lg  bg">
    <div className="container">

      <NavLink className="navbar-brand d-flex align-items-center " to="/">
        <img src={planet} alt="Logo Img" width="54" height="54" />
        <div className="ps-3 fs-2">Space Travelers Hub </div>
      </NavLink>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <GiHamburgerMenu />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav col-12 d-flex-md justify-content-end align-items-center">
          <li className="nav-item bdr d-flex align-items-center px-3">
            <NavLink exact activeClassName="fw-bold" className="nav-Link pt-1" to="/">Rockets</NavLink>
          </li>
          <li className="nav-item bdr d-flex align-items-center px-3 sp-b">
            <NavLink className="nav-Link pt-1" to="/missions">Missions</NavLink>
          </li>
          <li className="nav-item bdr d-flex align-items-center px-3">
            <NavLink className="nav-Link pt-1" to="/profile">My Profile</NavLink>
          </li>

        </ul>
      </div>
    </div>
  </nav>
);

export default withRouter(NavBar);
