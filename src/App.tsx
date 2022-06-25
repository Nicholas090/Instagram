import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Registration from './pages/Registration';
import SignIn from './pages/SignIn';
import UserPage from './pages/UserPage';
import SearchPage from './pages/SearchPage';

function App() {
	return (
		<Routes>
			<Route path="/xxx" element={<SignIn />} />
			<Route path="/register" element={<Registration />} />
			<Route path="/home" element={<UserPage />} />
			<Route path="/search" element={<SearchPage />} />
			<Route path="/reels" element={<UserPage />} />
		</Routes>
	);
}

export default App;
