/* eslint-disable react/jsx-filename-extension */
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Home from "./assets/Home";
import Cardapio from "./assets/Pages/Cardapio";

export default function AppRouter() {
	return(
		<Router>
			<Routes>
				<Route path="/" element={<Home/>}  />
				<Route path="/cardapio" element={<Cardapio />}  />
			</Routes>
		</Router>
	)
}
