import SVG from 'react-inlinesvg';
import logo from '../../logo.svg';

export default function Cardapio() {
	return (
		<main>
			<nav className="px-[250px] py-5">
				<SVG src={logo} title="Logo Aluroni" />
			</nav>
		</main>
	);
}
