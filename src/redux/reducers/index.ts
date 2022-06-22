import { combineReducers } from '@reduxjs/toolkit';
import iconsSlice from './activeSideBarIcon';
import userStoriesInfoSlice from './usersStoriesInfo';
import userPostsInfoSlice from './usersPosts';

const rootReducer = combineReducers({
	icons: iconsSlice.reducer,
	userStoriesInfo: userStoriesInfoSlice.reducer,
	userPostsInfo: userPostsInfoSlice.reducer,
});

export default rootReducer;
