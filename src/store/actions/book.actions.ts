import axios from 'axios';
import { Dispatch } from 'react';
import { IBook } from '../../types/book.types';
import { API } from '../../utils/consts';
import { getBooksSuccess, setBooksLoading } from '../slices/book.slice';

export const getBooks = () => async (dispatch: Dispatch<any>) => {
	try {
		dispatch(setBooksLoading());
		const { data } = await axios.get<IBook[]>(`${API}`);

		dispatch(getBooksSuccess(data));
	} catch (err) {
		console.log(err);
	}
};
