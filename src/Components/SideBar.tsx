import { HomeIcon, ReelsIcon, LoopIcon, UserIcon, HeartIcon } from '../icons/icons';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { ISideBarIcons } from '../redux/reducers/activeSideBarIcon';
import { setSideBarIcon } from '../redux/actions/actionCreater';

const SideBar = () => {
	const dispatch = useAppDispatch();
	const iconClick = (active: ISideBarIcons) => {
		dispatch(setSideBarIcon(active));
		console.log('success');
	};

	const active = useAppSelector((state) => state.icons.icon);
	return (
		<div className="sideBarWrapper">
			<div>
				<div>
					<div onClick={() => iconClick('home')}>
						<HomeIcon active={active === 'home'} />
					</div>
				</div>
				<div>
					<div onClick={() => iconClick('loop')}>
						<LoopIcon active={active === 'loop'} />
					</div>
				</div>
				<div>
					<div onClick={() => iconClick('reels')}>
						<ReelsIcon active={active === 'reels'} />
					</div>
				</div>
				<div>
					<div>
						<HeartIcon active={true} />
					</div>
				</div>

				<div>
					<div onClick={() => iconClick('profile')}>
						<UserIcon active={active === 'profile'} />
					</div>
				</div>
			</div>
		</div>
	);
};
export default SideBar;
