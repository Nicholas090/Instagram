import React from 'react';
import { LogoUserPage } from '../Components/LogoUserPage';
import SideBar from '../Components/SideBar';

const SearchPage = () => {
	return (
		<div>
			<LogoUserPage />
			<div style={{ display: 'flex', justifyContent: 'flex-start' }}>
				<SideBar />
			</div>
		</div>
	);
};
export default SearchPage;
