import { IUsersStoriesInfo } from '../redux/reducers/usersStoriesInfo';
import useImage from '../hooks/imageHook';
export const UserStories = ({ img, userName, active }: IUsersStoriesInfo) => {
	const { loading, error, image } = useImage(img);
	if (error) {
		console.log(error);
		return null;
	}
	if (image === null) {
		return null;
	}

	return (
		<div className="userStoriesWrapper">
			<div className="userStories">{loading ? null : <img src={image} />}</div>
		</div>
	);
};
