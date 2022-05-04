import { AnyAction } from '@reduxjs/toolkit';
import { Dispatch } from 'react';
import { IBook } from '../../types/book.types';
import { getWishSuccess, setWishLength } from '../slices/wish.slice';

function createWishFromLS() {
	let wish = JSON.parse(localStorage.getItem('wish') as string);

	if (!wish) {
		wish = [];
		localStorage.setItem('wish', JSON.stringify(wish));
	}
	return wish;
}

export const getWishLength = () => (dispatch: Dispatch<AnyAction>) => {
	let wish = createWishFromLS();
	dispatch(setWishLength(wish.length));
};
// add and delete
export const addDelToWish = (prod: IBook) => (dispatch: Dispatch<any>) => {
	let wish = createWishFromLS();

	let checkProdInWish = wish.some((obj: IBook) => {
		return obj.id === prod.id;
	});
	if (checkProdInWish) {
		wish = wish.filter((obj: IBook) => {
			return obj.id !== prod.id;
		});
	} else {
		wish.push(prod);
	}
	localStorage.setItem('wish', JSON.stringify(wish));
	dispatch(getWishLength());
	dispatch(getWishSuccess(wish));
};

export const getWish = () => (dispatch: Dispatch<AnyAction>) => {
	let wish = createWishFromLS();
	dispatch(getWishSuccess(wish));
};
