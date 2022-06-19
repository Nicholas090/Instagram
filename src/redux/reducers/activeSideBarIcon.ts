import { SET_SIDE_BAR_ICON } from '../actions/actions';

export type ISideBarIcons = 'reels' | 'loop' | 'profile' | 'home' | 'none';

interface ISideBarIconsState {
	icon: ISideBarIcons;
}
interface actionsI {
	type: string;
	payload: ISideBarIcons;
}

const initialState: ISideBarIconsState = {
	icon: 'none',
};

export const icons = (state: ISideBarIconsState = initialState, action: actionsI) => {
	switch (action.type) {
		case SET_SIDE_BAR_ICON:
			return {
				...state,
				icon: action.payload,
			};

		default:
			return state;
	}
};
