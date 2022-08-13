export interface IUserPost {
	imagePost: string;
	imageAvatar: string;
	active: boolean;
	userNickName: string;
	content: string;
	liked: boolean;
	id: number;
	likeCount: number;
}

export interface ISearchPagePostsData {
	imagesSmall: string[];
	imagesBig: string[];
}
