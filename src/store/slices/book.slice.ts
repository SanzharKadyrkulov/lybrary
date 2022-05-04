import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBook, IBookState } from '../../types/book.types';

const initialState: IBookState = {
	bots: [],
	error: null,
	loading: false,
};
export const bookSlice = createSlice({
	name: 'book',
	initialState,
	reducers: {
		getBooksSuccess: (state, action: PayloadAction<IBook[]>) => ({
			...state,
			error: null,
			bots: action.payload,
		}),
		setBooksLoading: (state) => ({ ...state, loading: true }),
		setBooksError: (state, action: PayloadAction<string>) => ({
			...state,
			error: action.payload,
		}),
	},
});

export const bookReducer = bookSlice.reducer;
export const { getBooksSuccess, setBooksError, setBooksLoading } =
	bookSlice.actions;
