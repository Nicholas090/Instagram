import { HomeIcon, ReelsIcon, LoopIcon, UserIcon, HeartIcon } from '../icons/icons';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { chooseIcon, ISideBarIcons } from '../redux/reducers/activeSideBarIcon';

const SideBar = () => {
	const dispatch = useAppDispatch();
	const iconClick = (active: ISideBarIcons): void => {
		dispatch(chooseIcon(active));
	};

	const active = useAppSelector((state) => state.icons.icon);
	return (
		<aside className="sideBarWrapper">
			<div>
				<button onClick={() => iconClick('home')} className={'pointer'}>
					<HomeIcon active={active === 'home'} />
				</button>
			</div>
			<div>
				<button onClick={() => iconClick('loop')} className={'pointer'}>
					<LoopIcon active={active === 'loop'} />
				</button>
			</div>
			<div>
				<button onClick={() => iconClick('reels')} className={'pointer'}>
					<ReelsIcon active={active === 'reels'} />
				</button>
			</div>
			<div>
				<button>
					<HeartIcon active={true} />
				</button>
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
