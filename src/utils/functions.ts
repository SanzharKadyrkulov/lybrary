export const generateId = (): string => {
	return Math.random().toString(36).substr(2, 9);
};

export const sortByAlphabet = (a: any, b: any): number => {
	if (a.title < b.title) {
		return -1;
	}
	if (a.title > b.title) {
		return 1;
	}
	return 0;
};
