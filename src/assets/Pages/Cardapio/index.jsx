import { useState } from 'react';
import SVG from 'react-inlinesvg';
import logo from '../../logo.svg';
import Buscador from '../Buscador';

// estilizacao do componente header no index.css
export default function Cardapio() {
	const [busca, setBusca] = useState('');

	return (
		<main className="w-full flex flex-col flex-wrap box-border">
			<nav className="px-12 sm:px-72  py-5">
				<SVG src={logo} title="Logo Aluroni" />
			</nav>
			<header className="cabecalho">
				<div className="text-white text-5xl sm:text-7xl  px-12 sm:px-72   w-full">
					A casa do código e da massa!
				</div>
			</header>
			<section className="">
				<h3 className="text-black text-4xl my-5  px-12 sm:px-72 ">Cardápio</h3>
				<Buscador busca={busca} setBusca={setBusca} />
			</section>
		</main>
	);
}
