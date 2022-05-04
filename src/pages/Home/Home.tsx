import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Filter from '../../components/Filter/Filter';
import OneBook from '../../components/OneBook/OneBook';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Home = () => {
	const { books } = useTypedSelector((state) => state.book);
	const { getBooks, getWish } = useActions();
	useEffect(() => {
		getBooks();
		getWish();
	}, []);
	const [searchParams, setSearchParams] = useSearchParams();

	const [category, setCategory] = useState(
		searchParams.get('category') || 'all'
	);

	useEffect(() => {
		if (searchParams.get('category')) {
			setSearchParams({
				category: category,
			});
		} else {
			setSearchParams({});
		}
	}, []);

	useEffect(() => {
		getBooks();
	}, [searchParams]);

	useEffect(() => {
		if (category === 'all') {
			setSearchParams({});
		} else {
			setSearchParams({ category: category });
		}
	}, [category]);

	return (
		<>
			<Container maxWidth='lg'>
				<h4>Oбщее количество книг: {books && books.length}</h4>
				<Filter category={category} setCategory={setCategory} />
				<Grid container spacing={4}>
					{books &&
						books.length > 0 &&
						books.map((item) => <OneBook key={item.id} item={item} />)}
				</Grid>
			</Container>
		</>
	);
};

export default Home;
