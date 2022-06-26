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
			<Route path="/login" element={<SignIn />} />
			<Route path="/register" element={<Registration />} />
			<Route path="/search" element={<SearchPage />} />
			<Route path="/home" element={<UserPage />} />
			<Route path="/reels" element={<UserPage />} />
			<Route path="/profile" element={<UserPage />} />
			<Route path="*" element={<div>404</div>} />
		</Routes>
	);
}

export default App;
