import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';

const List = () => {
	const { books } = useTypedSelector((store) => store.book);
	const { getBooks, deleteBook } = useActions();

	useEffect(() => {
		getBooks();
	}, []);

	const handleDelete = (id: string) => {
		deleteBook(id);
	};

	return (
		<div>
			<TableContainer component={Paper} style={{ marginTop: '100px' }}>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell sx={{ fontWeight: 'bold' }}>Название</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }} align='center'>
								Автор
							</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }} align='center'>
								Жанр
							</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }} align='right'>
								Картинка
							</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }} align='right'>
								Цена
							</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }} align='right'>
								Опции
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{books && books.length > 0 ? (
							books.map((item) => (
								<TableRow
									key={item.id}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell component='th' scope='row'>
										{item.title}
									</TableCell>
									<TableCell align='center'>{item.author}</TableCell>
									<TableCell align='center'>{item.category}</TableCell>
									<TableCell align='right'>
										<img width='40px' src={item.img} alt={item.title} />
									</TableCell>
									<TableCell align='right'>{item.price}</TableCell>
									<TableCell align='right'>
										<IconButton onClick={() => handleDelete(item.id)}>
											<DeleteIcon />
										</IconButton>
										<Link to={`/edit/${item.id}`}>
											<IconButton>
												<EditIcon />
											</IconButton>
										</Link>
									</TableCell>
								</TableRow>
							))
						) : (
							<h1>Нет книг</h1>
						)}
					</TableBody>
				</Table>
				<hr />
				<Link to='/add'>
					<IconButton style={{ margin: '20px' }}>
						<AddIcon fontSize='large' />
						<Box
							style={{
								marginLeft: '20px',
								textDecoration: 'none',
								fontSize: 22,
								color: 'black',
							}}
						>
							Добавить книгу
						</Box>
					</IconButton>
				</Link>
			</TableContainer>
		</div>
	);
};

export default List;
