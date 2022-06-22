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
		<div className="sideBarWrapper">
			<div>
				<div>
					<div onClick={() => iconClick('home')} className={'pointer'}>
						<HomeIcon active={active === 'home'} />
					</div>
				</div>
				<div>
					<div onClick={() => iconClick('loop')} className={'pointer'}>
						<LoopIcon active={active === 'loop'} />
					</div>
				</div>
				<div>
					<div onClick={() => iconClick('reels')} className={'pointer'}>
						<ReelsIcon active={active === 'reels'} />
					</div>
				</div>
				<div>
					<div>
						<HeartIcon active={true} />
					</div>
				</div>

				<div>
					<div onClick={() => iconClick('profile')} className={'pointer'}>
						<UserIcon active={active === 'profile'} />
					</div>
				</div>
			</div>
		</div>
	);
};
export default SideBar;
