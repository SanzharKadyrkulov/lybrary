import { configureStore } from '@reduxjs/toolkit';
import { bookReducer } from './slices/book.slice';
import { wishReducer } from './slices/wish.slice';

export const store = configureStore({
	reducer: {
		book: bookReducer,
		wish: wishReducer,
	},
});
export type TypeRootState = ReturnType<typeof store.getState>;
