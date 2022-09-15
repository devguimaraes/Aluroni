import SVG from 'react-inlinesvg';
import logo from '../../logo.svg';

// estilizacao do componente header no index.css

export default function Cardapio() {
	return (
		<main className="w-full flex flex-col box-border">
			<nav className="px-72 py-5">
				<SVG src={logo} title="Logo Aluroni" />
			</nav>
			<header className="cabecalho">
				<div className="text-white text-7xl px-72 w-full">
					A casa do código e da massa!
				</div>
			</header>
		</main>
	);
}
