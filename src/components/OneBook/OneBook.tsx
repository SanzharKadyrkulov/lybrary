import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, IconButton } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { IBook } from '../../types/book.types';

export default function OneBook({ item }: { item: IBook }) {
	return (
		<Grid item xs={12} sm={6} md={4}>
			<Card
				sx={{ maxWidth: 400, textAlign: 'center', border: '2px solid white' }}
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
					<Typography variant='h6' color='#ff9000'>
						${item.price}
					</Typography>
				</CardContent>

				<CardActions style={{ display: 'flex', flexDirection: 'column' }}>
					<IconButton title='Сохранить' color='inherit'>
						<BookmarkIcon />
					</IconButton>
				</CardActions>
			</Card>
		</Grid>
	);
}
