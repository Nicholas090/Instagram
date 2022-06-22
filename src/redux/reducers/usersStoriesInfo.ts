import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUsersStoriesInfo {
	img: string;
	userName: string;
	active: boolean;
}

interface IInitialState {
	userStoriesInfo: IUsersStoriesInfo[];
}

const initialState: IInitialState = {
	userStoriesInfo: [],
};

export const userStoriesInfoSlice = createSlice({
	name: 'userStoriesInfo',
	initialState,
	reducers: {
		setStoriesInfo(state, action: PayloadAction<IUsersStoriesInfo>) {
			return { ...state, userStoriesInfo: [...state.userStoriesInfo, action.payload] };
		},
	},
});

export const { setStoriesInfo } = userStoriesInfoSlice.actions;
export default userStoriesInfoSlice;
