import { ACTIVE_SIDE_BAR_ICON } from '../actions/actions';
import { ISideBarIcon } from '../reducers/activeSideBarIcon';

export const setSideBarIcon = (icon: ISideBarIcon) => ({
	type: ACTIVE_SIDE_BAR_ICON,
	payload: icon,
});
