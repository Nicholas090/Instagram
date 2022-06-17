import { HomeIcon, VideoIcon, LoopIcon, UserIcon, HeartIcon } from '../icons/icons';

const SideBar = () => {
	const iconClick = () => {
		console.log('pressed');
	};

	return (
		<div className="sideBarWrapper">
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					height: '100%',
				}}
			>
				<div style={{ margin: 'auto' }}>
					<div onClick={iconClick}>
						<HomeIcon />
					</div>
				</div>
				<div style={{ margin: 'auto' }}>
					<div onClick={iconClick}>
						<LoopIcon />
					</div>
				</div>
				<div style={{ margin: 'auto' }}>
					<div onClick={iconClick}>
						<VideoIcon />
					</div>
				</div>
				<div style={{ margin: 'auto' }}>
					<div onClick={iconClick}>
						<HeartIcon />
					</div>
				</div>
				<div style={{ margin: 'auto' }}>
					<div onClick={iconClick}>
						<UserIcon />
					</div>
				</div>
			</div>
		</div>
	);
};
export default SideBar;
