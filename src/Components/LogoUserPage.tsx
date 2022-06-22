import src from '../assets/LogoUserPage.png';

export const LogoUserPage = () => {
	// const src = require('../assets/LogoUserPage.png');
	return (
		<header>
			<div className="userLogoWrapper">
				<img src={src} />
			</div>
		</header>
	);
};
