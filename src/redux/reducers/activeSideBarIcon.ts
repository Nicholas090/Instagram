import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ISideBarIcons = 'reels' | 'search' | 'profile' | 'home';

interface ISideBarIconsState {
	icon: ISideBarIcons;
}

const initialState: ISideBarIconsState = {
	icon: 'home',
};

const iconsSlice = createSlice({
	name: 'icons',
	initialState,
	reducers: {
		chooseIcon(state, action: PayloadAction<ISideBarIcons>) {
			// return { ...state, icon: action.payload };
			state.icon = action.payload;
		},
	},
});

export const { chooseIcon } = iconsSlice.actions;
export default iconsSlice;
