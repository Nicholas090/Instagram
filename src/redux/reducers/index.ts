import { combineReducers } from '@reduxjs/toolkit';
import { icons } from './activeSideBarIcon';
import { userStoriesInfo } from './usersStorieInfo';

const rootReducer = combineReducers({
	icons,
	userStoriesInfo,
});

export default rootReducer;
