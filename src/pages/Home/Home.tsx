import { Container, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import OneBook from '../../components/OneBook/OneBook';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Home = () => {
	const { books } = useTypedSelector((state) => state.book);
	const { getBooks } = useActions();
	useEffect(() => {
		getBooks();
	}, []);

	return (
		<>
			<Container maxWidth='lg'>
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
