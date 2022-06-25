import { HomeIcon, ReelsIcon, LoopIcon, UserIcon, HeartIcon } from '../icons/icons';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { chooseIcon, ISideBarIcons } from '../redux/reducers/activeSideBarIcon';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const SideBar = () => {
	const location = useLocation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const icons: string[] = ['reels', 'search', 'profile', 'home'];
	const iconClick = (active: ISideBarIcons): void => {
		dispatch(chooseIcon(active));
		// icons.forEach((e) => {
		// 	if (active === e) {
		// 		navigate('/' + e);
		// 	}
		// });
	};

	useEffect(() => {
		icons.forEach((e) => {
			if (location.pathname === '/' + e) {
				dispatch(chooseIcon(e as any));
			}
		});
	});

	const active = useAppSelector((state) => state.icons.icon);
	return (
		<aside className="sideBarWrapper">
			<div>
				<Link to={'/home'} onClick={() => iconClick('home')} className={'pointer'}>
					<HomeIcon active={active === 'home'} />
				</Link>
			</div>
			<div>
				<Link to={'/search'} onClick={() => iconClick('search')} className={'pointer'}>
					<LoopIcon active={active === 'search'} />
				</Link>
			</div>
			<div>
				<Link to={'/reels'} onClick={() => iconClick('reels')} className={'pointer'}>
					<ReelsIcon active={active === 'reels'} />
				</Link>
			</div>
			<div>
				<Link to={'/home'}>
					<HeartIcon active={true} />
				</Link>
			</div>

			<div>
				<button onClick={() => iconClick('profile')} className={'pointer'}>
					<UserIcon active={active === 'profile'} />
				</button>
			</div>
		</aside>
	);
};
export default SideBar;
