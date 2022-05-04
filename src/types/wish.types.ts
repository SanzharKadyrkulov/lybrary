import { IBook } from './book.types';

export interface IWishState {
	wishes: IBook[];
	wishLength: number;
}
