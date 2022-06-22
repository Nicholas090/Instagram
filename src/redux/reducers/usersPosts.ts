import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUsersPostsInfo {
	img: string;
}

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
			return { ...state, userPostsInfo: [...state.userPostsInfo, action.payload] };
		},
	},
});

export const { setPostsInfo } = userPostsInfoSlice.actions;
export default userPostsInfoSlice;
