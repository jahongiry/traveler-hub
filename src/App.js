import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import DisplayMissions from './components/displayMissions';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Rockets from './components/Rockets';
import { fetchData } from './redux/store';
import { getMissions } from './redux/missions/missions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

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
