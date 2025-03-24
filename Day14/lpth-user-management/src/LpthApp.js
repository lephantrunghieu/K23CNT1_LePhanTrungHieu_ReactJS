

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LpthNavBar from './components/LpthNavBar';
import LpthHome from './components/LpthHome';
import LpthListUsers from './components/LpthListUsers';
import LpthCreateUser from './components/LpthCreateUser';
import LpthEditUser from './components/LpthEditUser';

import './App.css';

function LpthApp() {
  return (
    <Router>
      <div className="App">
        <LpthNavBar />
        <Routes>
          <Route path="/" element={<LpthHome />} />
          <Route path="/list-user" element={<LpthListUsers />} />
          <Route path="/create-user" element={<LpthCreateUser />} />
          <Route path="/edit-user/:id" element={<LpthEditUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default LpthApp;
