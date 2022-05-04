export interface IBook {
	id: string;
	title: string;
	category: string;
	img: string;
	price: number;
	author: string;
}
export interface IBookState {
	books: IBook[];
	book: IBook | null;
	error: string | null;
	loading: boolean;
}
