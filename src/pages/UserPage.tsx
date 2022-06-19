import React, { useLayoutEffect } from 'react';
import SideBar from '../Components/SideBar';
import { LogoUserPage } from '../Components/LogoUserPage';
import { UserStorie } from '../Components/UserStorie';
import axios from 'axios';
import { IUsersStorieInfo } from '../redux/reducers/usersStorieInfo';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setUserStorieInfo } from '../redux/actions/actionCreater';

const UserPage = () => {
	const dispatch = useAppDispatch();
	const stories = useAppSelector((state) => state.userStoriesInfo.userStoriesInfo);
	useLayoutEffect(() => {
		// const getUserData = async () => {
		axios
			.get('http://localhost:3001/users')
			.then((res) => {
				res.data.forEach((e: IUsersStorieInfo) => {
					dispatch(setUserStorieInfo(e));
				});

				return res.data;
			})
			.catch((e) => {
				console.log(e);
			});
		// };
		//
		// getUserData();
	}, []);

	return (
		<div>
			<LogoUserPage />
			<div style={{ display: 'flex', justifyContent: 'flex-start' }}>
				<SideBar />
				<div
					style={{
						marginLeft: '40px',
						marginTop: '50px',
						display: 'flex',
						// width: '700px',
						justifyContent: 'space-between',
						// overflow: 'scroll',
					}}
				>
					{stories.map((e, i) => {
						return <UserStorie img={e.img} userName={e.userName} active={e.active} key={i} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default UserPage;
