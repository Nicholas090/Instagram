import { HomeIcon, VideoIcon, LoopIcon, UserIcon, HeartIcon } from '../icons/icons';

const SideBar = () => {
	const iconClick = () => {
		console.log('pressed');
	};

	return (
		<div className="sideBarWrapper">
			<div
			// style={{
			// 	display: 'flex',
			// 	flexDirection: 'column',
			// 	justifyContent: 'space-between',
			// 	height: '100%',
			// }}
			>
				<div>
					<div onClick={iconClick}>
						<HomeIcon active={true} />
					</div>
				</div>
				<div>
					<div onClick={iconClick}>
						<LoopIcon active={true} />
					</div>
				</div>
				<div>
					<div>
						<VideoIcon active={true} />
					</div>
				</div>
				<div>
					<div onClick={iconClick}>
						<HeartIcon active={true} />
					</div>
				</div>

				<div>
					<div onClick={iconClick}>
						<UserIcon active={true} />
					</div>
				</div>
			</div>
		</div>
	);
};
export default SideBar;
