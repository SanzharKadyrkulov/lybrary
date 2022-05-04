import axios from 'axios';
import { Dispatch } from 'react';
import { IBook } from '../../types/book.types';
import { API } from '../../utils/consts';
import {
	getBooksSuccess,
	getOneBookSuccess,
	setBooksLoading,
} from '../slices/book.slice';
import { generateId, sortByAlphabet } from '../../utils/functions';

export const getBooks = () => async (dispatch: Dispatch<any>) => {
	try {
		dispatch(setBooksLoading());
		const { data } = await axios.get<IBook[]>(`${API}`);

		dispatch(getBooksSuccess(data.sort(sortByAlphabet)));
	} catch (err) {
		console.log(err);
	}
};

export const getOneBook = (id: string) => async (dispatch: Dispatch<any>) => {
	try {
		dispatch(setBooksLoading());
		const { data } = await axios.get<IBook>(`${API}/${id}`);

		dispatch(getOneBookSuccess(data));
	} catch (err) {
		console.log(err);
	}
};

export const addBook =
	(newProduct: IBook) => async (dispatch: Dispatch<any>) => {
		try {
			await axios.post(API, { ...newProduct, id: generateId() });
			dispatch(getBooks());
		} catch (err) {
			console.log(err);
		}
	};

export const deleteBook = (id: string) => async (dispatch: Dispatch<any>) => {
	try {
		await axios.delete(`${API}/${id}`);
		dispatch(getBooks());
	} catch (err) {
		console.log(err);
	}
};

export const saveEditedBook =
	(editedProd: IBook) => async (dispatch: Dispatch<any>) => {
		try {
			await axios.patch(`${API}/${editedProd.id}`, editedProd);
			dispatch(getBooks());
		} catch (err) {
			console.log(err);
		}
	};
