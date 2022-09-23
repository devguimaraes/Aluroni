/* eslint-disable react/jsx-filename-extension */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/Home';
import Cardapio from './assets/Pages/Cardapio';
import Sobre from './assets/Pages/Sobre';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Page404 from './Components/Page404';

export default function AppRouter() {
	return (
		<Router>
			<Menu />
			<Routes>
				<Route path="/" element={<Header />}>
					<Route index element={<Home />} />
					<Route path="/cardapio" element={<Cardapio />} />
					<Route path="/sobre" element={<Sobre />} />
				</Route>
				<Route path="*" element={<Page404 />} />
			</Routes>
		</Router>
	);
}
