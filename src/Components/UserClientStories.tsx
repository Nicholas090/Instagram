import { IUsersStoriesInfo } from '../redux/reducers/usersStoriesInfo';
import useImage from '../hooks/imageHook';
export const UserClientStories = ({ img, userName, active }: IUsersStoriesInfo) => {
	const { loading, error, image } = useImage(img);
	if (error) {
		console.log(error);
		return null;
	}
	if (image === null) {
		return null;
	}

	return (
		<div className={active ? 'userStoriesWrapper' : 'userClientStoriesWrapperNonActive'}>
			<div className="userStories clientStories">
				{loading ? null : <img src={image} />}
				{!active && loading ? null : <div className="addStoriesWrapper"></div>}
			</div>
		</div>
	);
};
