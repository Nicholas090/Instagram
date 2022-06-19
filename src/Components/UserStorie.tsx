import { IUsersStorieInfo } from '../redux/reducers/usersStorieInfo';

export const UserStorie = ({ img, userName, active }: IUsersStorieInfo) => {
	const src = require('../assets/img/testFace.png');

	return (
		<div className="userStorieWrapper">
			<div className="userStorie">
				<img src={src} />
			</div>
		</div>
	);
};
