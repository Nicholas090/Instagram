import useImage from '../hooks/imageHook';

interface IUserPostProps {
	img: string;
}

export const UserPost = ({ img }: IUserPostProps) => {
	const { loading, error, image } = useImage(img);
	if (error) {
		console.log(error);
	}

	return (
		<>{loading || error || image === null ? null : <img src={image} className={'postImage'} />}</>
	);
};
