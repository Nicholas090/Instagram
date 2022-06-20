import { IUsersStorieInfo } from '../redux/reducers/usersStorieInfo';
import useImage from '../hooks/imageHook';
export const UserStorie = ({ img, userName, active }: IUsersStorieInfo) => {
	const { loading, error, image } = useImage(img);
	if (error) {
		console.log(error);
		return null;
	}
	if (image === null) {
		return null;
	}

	return (
		<div className="userStorieWrapper">
			<div className="userStorie">{loading ? null : <img src={image} />}</div>
		</div>
	);
};
