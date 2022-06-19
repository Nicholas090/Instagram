import { SET_USERS_STORIE_INFO } from '../actions/actions';

export interface IUsersStorieInfo {
	img: string;
	userName: string;
	active: boolean;
}

interface actionsI {
	type: string;
	payload: IUsersStorieInfo;
}
interface IinitialState {
	userStoriesInfo: IUsersStorieInfo[];
}

const initialState = {
	userStoriesInfo: [],
};

export const userStoriesInfo = (state: IinitialState = initialState, action: actionsI) => {
	switch (action.type) {
		case SET_USERS_STORIE_INFO:
			return {
				...state,
				userStoriesInfo: [...state.userStoriesInfo, action.payload],
			};

		default:
			return state;
	}
};
