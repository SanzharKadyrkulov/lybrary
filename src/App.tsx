import React, { useEffect } from 'react';
import './App.css';
import { useActions } from './hooks/useActions';
import { useTypedSelector } from './hooks/useTypedSelector';
import MyRoutes from './routes/MyRoutes';

function App() {
	const { bots } = useTypedSelector((store) => store.book);
	const { getBooks } = useActions();
	useEffect(() => {
		getBooks();
	}, []);
	console.log(bots);
	return (
		<div className='App'>
			<MyRoutes />
		</div>
	);
}

export default App;
