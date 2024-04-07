import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './slices/loadingSlice';
import filesReducer from './slices/filesSlice';

export const store = configureStore({
	reducer: {
		loading: loadingReducer,
		files: filesReducer,
	},
});
