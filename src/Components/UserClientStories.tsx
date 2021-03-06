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
	//
	return (
		<div className={active ? 'userClientStoriesWrapper' : 'userClientStoriesWrapperNonActive'}>
			<div
				className={`clientStories pointer ${!active && !loading ? 'clientStoriesClick' : ''}`}
				onClick={() => console.log('clicked')}
			>
				{loading ? null : <img src={image} className={'clientStoriesImg'} />}
				{active || loading ? null : <div className={'addStoriesWrapper plus'}></div>}
			</div>
		</div>
	);
};
