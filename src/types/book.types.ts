export interface IBook {
	id: number;
	title: string;
	category: string;
	img: string;
	price: number;
	author: string;
}
export interface IBookState {
	bots: IBook[];
	error: string | null;
	loading: boolean;
}
