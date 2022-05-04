import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Slider from '@mui/material/Slider';
import { Button, Typography } from '@mui/material';

const Filter = ({ type, setType, setPage, slider, setSlider, handleReset }) => {
	const [filterDisp, setFilterDisp] = useState(false);

	const changeDisp = () => {
		if (filterDisp) {
			setFilterDisp(false);
		} else {
			setFilterDisp(true);
		}
	};

	return (
		<div style={{ textAlign: 'center' }}>
			<Button
				sx={{
					p: 1,
					m: 1,
					fontSize: '1rem',
					fontWeight: '900',
					color: '#991199',
				}}
				onClick={changeDisp}
			>
				<h3>Сортировка</h3>
			</Button>
			<br />
			<div
				style={{ display: filterDisp ? 'block' : 'none', textAlign: 'center' }}
			>
				<FormControl>
					<FormLabel id='demo-radio-buttons-group-label'>Жанр</FormLabel>
					<RadioGroup
						aria-labelledby='demo-radio-buttons-group-label'
						defaultValue='female'
						name='radio-buttons-group'
						value={type}
						onChange={(e) => {
							setType(e.target.value);
							setPage(1);
						}}
					>
						<FormControlLabel value='all' control={<Radio />} label='All' />
						<FormControlLabel
							value='Детектив'
							control={<Radio />}
							label='Детектив'
						/>
						<FormControlLabel value='Роман' control={<Radio />} label='Роман' />
						<FormControlLabel
							value='Поэзия'
							control={<Radio />}
							label='Поэзия'
						/>
						<FormControlLabel
							value='Фантастика'
							control={<Radio />}
							label='Фантастика'
						/>
						<FormControlLabel
							value='Психология'
							control={<Radio />}
							label='Психология'
						/>
					</RadioGroup>
				</FormControl>
				<br />
				<br />
				<Button onClick={handleReset} variant='outlined'>
					Reset
				</Button>
			</div>
		</div>
	);
};

export default Filter;
