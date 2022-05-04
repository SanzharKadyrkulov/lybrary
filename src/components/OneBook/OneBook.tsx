import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { IBook } from '../../types/book.types';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export default function OneBook({ item }: { item: IBook }) {
	const { wishes } = useTypedSelector((store) => store.wish);
	const { addDelToWish } = useActions();

	const isProdInWish = (id: string) => {
		let exist = wishes.some((obj: IBook) => {
			return obj.id === id;
		});
		return exist;
	};
	return (
		<Grid item xs={12} sm={6} md={4}>
			<Card
				sx={{
					maxWidth: 400,
					textAlign: 'center',
					border: '2px solid white',
					position: 'relative',
				}}
			>
				<CardMedia
					component='img'
					height='350'
					image={item.img}
					alt={item.title}
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{item.title}
					</Typography>
					<Typography variant='body1'>{item.author}</Typography>
					<Typography variant='body1'>Жанр: {item.category}</Typography>
					<Typography variant='h6' color='primary'>
						${item.price}
					</Typography>
				</CardContent>

				<IconButton
					style={{
						display: 'flex',
						flexDirection: 'column',
						position: 'absolute',
						zIndex: 1,
						top: 0,
						right: 0,
						backgroundColor: 'rgba(255,255,255,0.5)',
					}}
					title='Сохранить'
					color={isProdInWish(item.id) ? 'warning' : 'default'}
					onClick={() => addDelToWish(item)}
				>
					<StarIcon />
				</IconButton>
			</Card>
		</Grid>
	);
}
