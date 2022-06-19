import { SET_SIDE_BAR_ICON, SET_USERS_STORIE_INFO } from './actions';
import { ISideBarIcons } from '../reducers/activeSideBarIcon';
import { IUsersStorieInfo } from '../reducers/usersStorieInfo';

export const setSideBarIcon = (icon: ISideBarIcons) => ({
	type: SET_SIDE_BAR_ICON,
	payload: icon,
});

export const setUserStorieInfo = (usersStorieInfo: IUsersStorieInfo) => ({
	type: SET_USERS_STORIE_INFO,
	payload: usersStorieInfo,
});
