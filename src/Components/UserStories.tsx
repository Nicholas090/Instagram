import { IUsersStoriesInfo } from '../redux/reducers/usersStoriesInfo';
import defaultUserIcon from '../assets/defaultUserIcon.png';
import useImage from '../hooks/imageHook';
export const UserStories = ({ img, userName, active }: IUsersStoriesInfo) => {
	const { loading, error, image } = useImage(img);
	if (error) {
		console.log(error);
	}

	return (
		<div className="userStoriesWrapper">
			<div className="userStories pointer">
				{loading || error || image === null ? <img src={defaultUserIcon} /> : <img src={image} />}
			</div>
		</div>
	);
};
