import React, { useLayoutEffect } from 'react';
import SideBar from '../Components/SideBar';
import { LogoUserPage } from '../Components/LogoUserPage';
import { UserStories } from '../Components/UserStories';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { Carousel } from '../Components/Carousel';
import { UserClientStories } from '../Components/UserClientStories';
import { IUsersStoriesInfo, setStoriesInfo } from '../redux/reducers/usersStoriesInfo';
import { CarouselPost } from '../Components/CarouselPost';
import { IUsersPostsInfo, setPostsInfo } from '../redux/reducers/usersPosts';
import { UserPost } from '../Components/UserPost';

const UserPage = () => {
	const dispatch = useAppDispatch();
	const stories = useAppSelector((state) => state.userStoriesInfo.userStoriesInfo);
	const posts = useAppSelector((state) => state.userPostsInfo.userPostsInfo);
	useLayoutEffect(() => {
		// const getUserData = async () => {
		axios
			.get('http://localhost:3001/users')
			.then((res) => {
				res.data.forEach((e: IUsersStoriesInfo) => {
					dispatch(setStoriesInfo(e));
				});
				return res.data;
			})
			.catch((e) => {
				console.log(e);
			});

		axios
			.get('http://localhost:3001/posts')
			.then((res) => {
				res.data.forEach((e: IUsersPostsInfo) => {
					dispatch(setPostsInfo(e));
				});
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	return (
		<div>
			<LogoUserPage />
			<div style={{ display: 'flex', justifyContent: 'flex-start' }}>
				<SideBar />
				<div style={{ display: 'flex', flexDirection: 'column', marginLeft: '30px' }}>
					<div style={{ display: 'flex', marginTop: '50px', height: '100px' }}>
						<UserClientStories img={'testFace2.png'} userName={''} active={false} />
						<Carousel countMaxStories={4} countAllStories={7} storiesBlockWidth={115}>
							{stories.map((e, i) => {
								return <UserStories img={e.img} userName={e.userName} active={e.active} key={i} />;
							})}
						</Carousel>
					</div>
					<div className={'postsBlockWrapper'}>
						{posts.map((e, i) => {
							return (
								<div className={'postWrapper'}>
									<UserPost img={e.img} />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserPage;
