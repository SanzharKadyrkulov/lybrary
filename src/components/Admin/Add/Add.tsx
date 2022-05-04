import React from 'react';
import { useActions } from '../../../hooks/useActions';
import Form from '../Form/Form';

const Add = () => {
	const { addBook } = useActions();
	return (
		<div>
			<h2 style={{ marginTop: '150px', textAlign: 'center' }}>
				Добавить книгу
			</h2>
			<Form saveValues={addBook} compForEdit={false} />
		</div>
	);
};

export default Add;
