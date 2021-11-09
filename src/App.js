import { React, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getMissions } from './redux/missions/missions';
import { getRockets } from './redux/Rockets/rockets';
import NavBar from './components/NavBar';
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
        <NavBar />
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
