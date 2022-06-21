import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ISideBarIcons = 'reels' | 'loop' | 'profile' | 'home' | 'none';

interface ISideBarIconsState {
	icon: ISideBarIcons;
}

const initialState: ISideBarIconsState = {
	icon: 'none',
};

const iconsSlice = createSlice({
	name: 'icons',
	initialState,
	reducers: {
		chooseIcon(state, action: PayloadAction<ISideBarIcons>) {
			return { ...state, icon: action.payload };
		},
	},
});

export const { chooseIcon } = iconsSlice.actions;
export default iconsSlice;
