import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

export const storeRedux = configureStore({
	reducer: { rootReducer },
});

export type RootState = ReturnType<typeof storeRedux.getState>;
export type AppDispatch = typeof storeRedux.dispatch;
