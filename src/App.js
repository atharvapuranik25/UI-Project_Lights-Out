import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import React from 'react';
import Home from './components/Home';
import Events from "./components/Events";
import Discover from "./components/Discover";
import Navbar from './components/Navbar';



export default function App() {

  return (
    <div>

      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="discover" element={<Discover />} />
          <Route path="events" element={<Events />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}
