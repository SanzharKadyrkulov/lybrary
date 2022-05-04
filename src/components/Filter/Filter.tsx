import React, { Dispatch, SetStateAction, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material';

interface IProps {
	category: string;
	setCategory: Dispatch<SetStateAction<string>>;
}

const Filter = ({ category, setCategory }: IProps) => {
	return (
		<div style={{ textAlign: 'center', margin: '28px 0' }}>
			<FormControl>
				<FormLabel id='demo-radio-buttons-group-label'>Жанр</FormLabel>
				<RadioGroup
					aria-labelledby='demo-radio-buttons-group-label'
					defaultValue='all'
					name='radio-buttons-group'
					value={category}
					onChange={(e) => {
						setCategory(e.target.value);
					}}
					sx={{
						display: 'flex',
						justifyContent: 'flex-start',
						flexDirection: 'row',
						width: '100%',
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
						value='Фантастика'
						control={<Radio />}
						label='Фантастика'
					/>
				</RadioGroup>
			</FormControl>
		</div>
	);
};

export default Filter;
