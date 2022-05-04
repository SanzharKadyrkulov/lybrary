import React from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import Form from '../Form/Form';
const Edit = () => {
	const { book } = useTypedSelector((store) => store.book);
	const { getOneBook, saveEditedBook } = useActions();

	return (
		<div>
			<h2 style={{ marginTop: '150px', textAlign: 'center' }}>
				Изменить продукт
			</h2>
			<Form
				saveValues={saveEditedBook}
				compForEdit={true}
				forEditVal={book}
				getOneProduct={getOneBook}
			/>
		</div>
	);
};

export default Edit;
