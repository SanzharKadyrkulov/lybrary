import { Container, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import OneBook from '../../components/OneBook/OneBook';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const WishList = () => {
	const { wishes } = useTypedSelector((store) => store.wish);
	const { getWish } = useActions();
	useEffect(() => {
		getWish();
	}, []);
	return (
		<>
			<Container maxWidth='lg'>
				<Grid container spacing={4}>
					{wishes &&
						wishes.length > 0 &&
						wishes.map((item) => <OneBook key={item.id} item={item} />)}
				</Grid>
			</Container>
		</>
	);
};

export default WishList;
