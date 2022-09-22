/* eslint-disable react/jsx-filename-extension */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/Home';
import Cardapio from './assets/Pages/Cardapio';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Page4040 from './Components/Page404';

export default function AppRouter() {
	return (
		<Router>
			<Menu />
			<Routes>
				<Route path="/" element={<Header />}>
					<Route index element={<Home />} />
					<Route path="/cardapio" element={<Cardapio />} />
				</Route>
				<Route path="*" element={<Page4040 />} />
			</Routes>
		</Router>
	);
}
