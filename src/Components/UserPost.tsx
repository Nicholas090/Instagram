import useImage from '../hooks/imageHook';
import defaultImage from '../assets/defaultImage.jpeg';
interface IUserPostProps {
	imagePost: string;
	imagePostStories: string;
}

export const UserPost = ({ imagePost, imagePostStories }: IUserPostProps) => {
	const currentPostImage = useImage(imagePost);
	const currentStoriesImage = useImage(imagePostStories);
	if (currentPostImage.error) {
		console.log(currentPostImage.error);
	}
	if (currentStoriesImage.error) {
		console.log(currentStoriesImage.error);
	}

	return (
		<>
			{currentPostImage.loading || currentPostImage.error || !currentPostImage.image ? (
				<div className={'defaultImagePostWrapper postImage'}>
					<img src={defaultImage} className={'postImage'} />
				</div>
			) : (
				<img src={currentPostImage.image} className={'postImage'} />
			)}
			{/*<div className={'postInfoWrapper'}>*/}
			{/*	<div className={'userPostInfoStoriesWrapper'}>*/}
			{/*		<div className={'userPostInfoStories'}></div>*/}
			{/*	</div>*/}
			{/*</div>*/}
		</>
	);
};
