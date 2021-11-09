import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './components/NavBar';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';
import { getRockets } from './redux/Rockets/rockets';

function App() {
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
