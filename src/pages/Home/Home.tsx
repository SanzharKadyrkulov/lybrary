import { Container, Grid } from '@mui/material';
import React, { useEffect } from 'react';
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

	const [type, setType] = useState(searchParams.get('type') || 'all');

	useEffect(() => {
		if (searchParams.get('type')) {
			setSearchParams({
				type: type,
			});
		} else {
			setSearchParams({});
		}
	}, []);

	useEffect(() => {
		getProducts();
	}, [searchParams]);

	useEffect(() => {
		if (type === 'all') {
			setSearchParams(paramsNoType());
		} else {
			setSearchParams(paramsWithType());
		}
	}, [page, type, slider]);

	const handleReset = () => {
		setType('all');
		setSlider(minSliderValue);
		setSearchParams({
			_page: page,
			_limit: PRODUCTS_LIMIT,
			price_gte: minSliderValue,
			q: '',
		});
	};

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
