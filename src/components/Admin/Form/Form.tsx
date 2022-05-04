import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, Container, SelectChangeEvent } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

const initValues = {
	title: '',
	author: '',
	category: '',
	price: '',
	img: '',
};

const Form = ({ saveValues, compForEdit, forEditVal, getOneProduct }: any) => {
	const [inpValues, setInpValues] = useState(initValues);
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (compForEdit) {
			getOneProduct(id);
		}
	}, []);

	useEffect(() => {
		if (compForEdit && forEditVal) {
			setInpValues(forEditVal);
		}
	}, [forEditVal]);

	const handleChange = (
		e:
			| React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
			| SelectChangeEvent<string>
	) => {
		let obj = {
			...inpValues,
			[e.target.name]: e.target.value,
		};
		setInpValues(obj);
	};

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		let obj = {
			...inpValues,
			price: +inpValues.price,
		};
		saveValues(obj);
		navigate('/admin');
	};

	return (
		<Container maxWidth='lg'>
			<form
				onSubmit={(e) => handleSubmit(e)}
				style={{
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<TextField
					name='title'
					value={inpValues.title}
					onChange={(e) => handleChange(e)}
					id='outlined-basic'
					label='Название книги'
					variant='outlined'
					sx={{ my: 1 }}
				/>
				<TextField
					name='author'
					value={inpValues.author}
					onChange={(e) => handleChange(e)}
					id='outlined-basic'
					label='Автор'
					variant='outlined'
					sx={{ my: 1 }}
				/>
				<FormControl fullWidth>
					<InputLabel id='demo-simple-select-label'>Жанр</InputLabel>
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						name='category'
						value={inpValues.category}
						label='Жанр'
						onChange={(e) => handleChange(e)}
						sx={{ my: 1 }}
					>
						<MenuItem value={'Детектив'}>Детектив</MenuItem>
						<MenuItem value={'Роман'}>Роман</MenuItem>
						<MenuItem value={'Поэзия'}>Поэзия</MenuItem>
						<MenuItem value={'Фантастика'}>Фантастика</MenuItem>
						<MenuItem value={'Психология'}>Психология</MenuItem>
					</Select>
				</FormControl>
				<TextField
					type='number'
					name='price'
					value={inpValues.price}
					onChange={(e) => handleChange(e)}
					id='outlined-basic'
					label='Цена'
					variant='outlined'
					sx={{ my: 1 }}
				/>
				<TextField
					name='img'
					value={inpValues.img}
					onChange={(e) => handleChange(e)}
					id='outlined-basic'
					label='Картинка'
					variant='outlined'
					sx={{ my: 1 }}
				/>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<Button
						type='submit'
						variant='contained'
						style={{ width: '400px', marginBottom: '20px' }}
					>
						Submit
					</Button>
				</div>
			</form>
		</Container>
	);
};

export default Form;
