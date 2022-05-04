import { configureStore } from '@reduxjs/toolkit';
import { bookReducer } from './slices/book.slice';

export const store = configureStore({
	reducer: {
		book: bookReducer,
	},
});
export type TypeRootState = ReturnType<typeof store.getState>;
