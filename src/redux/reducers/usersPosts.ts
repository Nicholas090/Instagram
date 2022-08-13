import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserPost } from '../../interfaces/types';
import { stat } from 'fs';

export interface IUsersPostsInfo extends IUserPost {}

interface IInitialState {
	userPostsInfo: IUsersPostsInfo[];
}

const initialState: IInitialState = {
	userPostsInfo: [],
};

export const userPostsInfoSlice = createSlice({
	name: 'userStoriesInfo',
	initialState,
	reducers: {
		setPostsInfo(state, action: PayloadAction<IUsersPostsInfo>) {
			// return { ...state, userPostsInfo: [...state.userPostsInfo, action.payload] };
			const currentPost = state.userPostsInfo.find((e) => e.id === action.payload.id);
			if (currentPost === undefined) {
				state.userPostsInfo.push(action.payload);
			}
		},
		setLikedPost(state, action: PayloadAction<number>) {
			state.userPostsInfo.map((e) => {
				if (e.id === action.payload) {
					e.liked = !e.liked;
				}
			});
		},
	},
});

export const { setPostsInfo, setLikedPost } = userPostsInfoSlice.actions;
export default userPostsInfoSlice;
