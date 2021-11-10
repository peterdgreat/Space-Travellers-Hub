import { React, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GiHamburgerMenu } from 'react-icons/gi';
import { getMissions } from './redux/missions/missions';
import { getRockets } from './redux/Rockets/rockets';
import './css/NavBar.css';
import planet from './components/planet.png';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';
import './App.css';

function App() {
  const dispatchMissions = useDispatch();
  useEffect(() => {
    dispatchMissions(getMissions());
  }, []);

  const dispatchRocket = useDispatch();
  useEffect(() => {
    dispatchRocket(getRockets());
  }, []);

  return (
    <Router>
      <div className="App">
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
                  <NavLink activeClassName="fw-bold" className="nav-Link pt-1" to="/">Rockets</NavLink>
                </li>
                <li className="nav-item bdr d-flex align-items-center px-3 sp-b">
                  <NavLink activeClassName="fw-bold" className="nav-Link pt-1" to="/missions">Missions</NavLink>
                </li>
                <li className="nav-item bdr d-flex align-items-center px-3">
                  <NavLink activeClassName="fw-bold" className="nav-Link pt-1" to="/profile">My Profile</NavLink>
                </li>

              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
