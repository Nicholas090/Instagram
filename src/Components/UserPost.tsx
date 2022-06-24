import useImage from '../hooks/imageHook';
import defaultImage from '../assets/defaultImage.jpeg';
import { IUserPost } from '../types/types';
import defaultUserIcon from '../assets/defaultUserIcon.png';
import { CommentIcon, HeartLike, MessageIcon, SaveIcon } from '../icons/icons';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setLikedPost } from '../redux/reducers/usersPosts';

interface IUserPostProps extends IUserPost {}

export const UserPost = (Post: IUserPostProps) => {
	const { imagePost, imageAvatar, userNickName, content, liked, id, likeCount } = Post;
	const currentPostImage = useImage(imagePost);
	const currentAvatarImage = useImage(imageAvatar);
	if (currentPostImage.error) {
		console.log(currentPostImage.error);
	}
	if (currentAvatarImage.error) {
		console.log(currentAvatarImage.error);
	}
	const currentPost = useAppSelector((state) =>
		state.userPostsInfo.userPostsInfo.find((e) => {
			if (e.id === id) {
				return true;
			} else {
				return false;
			}
		}),
	);
	const dispatch = useAppDispatch();

	return (
		<article className={'postWrapper'}>
			{currentPostImage.loading || currentPostImage.error || !currentPostImage.image ? (
				<div className={'defaultImagePostWrapper postImage'}>
					<img src={defaultImage} className={'postImage'} />
				</div>
			) : (
				<img src={currentPostImage.image} className={'postImage'} />
			)}
			<div className={'postInfoWrapper'}>
				<div className={'userPostInfoWrapper'}>
					<header className={'postInfoNameTime'}>
						<div className={'userPostAvatar'}>
							{currentAvatarImage.loading ||
							currentAvatarImage.error ||
							!currentAvatarImage.image ? (
								<img src={defaultUserIcon} />
							) : (
								<img src={currentAvatarImage.image} />
							)}
						</div>
						<div style={{ marginLeft: '10px' }}>
							<div className={'postUserNickNameWrapper'}>
								<span>{userNickName}</span>
							</div>
							<div className={'postTime'}>
								<time>10 минут назад</time>
							</div>
						</div>
					</header>
					<button className={'additionalPostInfo cursor'} onClick={() => console.log('clicked')}>
						<div className={'clickedAdditionalInfoPost'}>
							<svg
								width="5"
								height="19"
								viewBox="0 0 5 19"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle cx="2.5" cy="2.5" r="2.5" fill="#2D2D2D" />
								<circle cx="2.5" cy="9.5" r="2.5" fill="#2D2D2D" />
								<circle cx="2.5" cy="16.5" r="2.5" fill="#2D2D2D" />
							</svg>
						</div>
					</button>
				</div>
				<div className={'userPostContentWrapper'}>
					<span className={'userPostContent'}>{content}</span>
				</div>
				<section className={'userPostSectionButtons'}>
					<div className={'userPostButtonsWrapper'}>
						<button>
							<HeartLike active={currentPost!.liked} onClick={() => dispatch(setLikedPost(id))} />
						</button>
						<button>
							<CommentIcon onClick={() => console.log('clicked')} />
						</button>
						<button>
							<MessageIcon onClick={() => console.log('clicked')} />
						</button>
						<button>
							<SaveIcon onClick={() => console.log('clicked')} />
						</button>
					</div>
				</section>
				<section className={'userPostLikeCountWrapper'}>
					<span className={'userPostLikeCount'}>{likeCount}</span>
				</section>
			</div>
		</article>
	);
};
