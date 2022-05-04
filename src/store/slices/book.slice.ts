import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBook, IBookState } from '../../types/book.types';

const initialState: IBookState = {
	books: [],
	book: null,
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
			loading: false,
			books: action.payload,
		}),
		getOneBookSuccess: (state, action: PayloadAction<IBook>) => ({
			...state,
			error: null,
			loading: false,
			book: action.payload,
		}),
		setBooksLoading: (state) => ({ ...state, loading: true }),
		setBooksError: (state, action: PayloadAction<string>) => ({
			...state,
			error: action.payload,
		}),
	},
});

export const bookReducer = bookSlice.reducer;
export const {
	getBooksSuccess,
	getOneBookSuccess,
	setBooksError,
	setBooksLoading,
} = bookSlice.actions;
