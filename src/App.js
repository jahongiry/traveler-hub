import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// import Missions from "./components/Missons";
import DisplayMissions from "./components/displayMissions";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";
import Rockets from "./components/Rockets";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./redux/store";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
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
