import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import WishList from '../pages/WishList/WishList';

const MyRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<MainLayout />}>
					<Route path='/' element={<Home />} />
					<Route path='/wish' element={<WishList />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default MyRoutes;
