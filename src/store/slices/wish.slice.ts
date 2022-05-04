import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBook } from '../../types/book.types';
import { IWishState } from '../../types/wish.types';

const initialState: IWishState = {
	wishes: [],
	wishLength: 0,
};
export const wishSlice = createSlice({
	name: 'wish',
	initialState,
	reducers: {
		getWishSuccess: (state, action: PayloadAction<IBook[]>) => ({
			...state,
			wishes: action.payload,
		}),
		setWishLength: (state, action: PayloadAction<number>) => ({
			...state,
			wishLength: action.payload,
		}),
	},
});
export const { getWishSuccess, setWishLength } = wishSlice.actions;
export const wishReducer = wishSlice.reducer;
