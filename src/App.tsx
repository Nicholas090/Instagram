import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Registration from './pages/Registration';
import SignIn from './pages/SignIn';
import UserPage from './pages/UserPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/user" element={<UserPage />} />
    </Routes>
  );
}

export default App;
