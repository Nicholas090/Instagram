import { SET_SIDE_BAR_ICON } from './actions';
import { ISideBarIcons } from '../reducers/activeSideBarIcon';

export const setSideBarIcon = (icon: ISideBarIcons) => ({
	type: SET_SIDE_BAR_ICON,
	payload: icon,
});
