import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserPost } from '../../types/types';
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
			state.userPostsInfo.push(action.payload);
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
