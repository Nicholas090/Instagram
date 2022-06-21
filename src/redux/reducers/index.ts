import { combineReducers } from '@reduxjs/toolkit';
import iconsSlice from './activeSideBarIcon';
import userStoriesInfoSlice from './usersStoriesInfo';

const rootReducer = combineReducers({
	icons: iconsSlice.reducer,
	userStoriesInfo: userStoriesInfoSlice.reducer,
});

export default rootReducer;
