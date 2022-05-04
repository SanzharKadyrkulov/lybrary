import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from '../components/Admin/Add/Add';
import Edit from '../components/Admin/Edit/Edit';
import List from '../components/Admin/List/List';
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
					<Route path='/admin' element={<List />} />
					<Route path='/edit/:id' element={<Edit />} />
					<Route path='/add' element={<Add />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default MyRoutes;
