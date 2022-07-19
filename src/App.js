import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import Missions from './components/Missons';
// import singleMission from './components/singleMisson';
import DisplayMissions from './components/displayMissions';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Rockets from './components/Rockets';
// import NotMatch from "./components/pages/notMatch";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<DisplayMissions />} />
        <Route path="/myprofile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
