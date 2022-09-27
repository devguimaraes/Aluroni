import SVG from 'react-inlinesvg';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

export default function Menu() {
	const rotas = [
		{
			label: 'Inicio',
			to: '/',
			id: 1,
		},
		{
			label: 'Cardápio',
			to: '/cardapio',
			id: 2,
		},
		{
			label: 'Sobre',
			to: '/sobre',
			id: 3,
		},
	];

	return (
		<nav className="flex px-12 sm:px-72  py-5 cursor-pointer">
			<Link to="/">
				<SVG src={logo} title="Logo Aluroni" className="w-[90px]" />
			</Link>
			<ul className="items-center flex">
				{rotas.map((rota) => (
					<li key={rota.id} className="list-none px-5">
						<Link
							to={rota.to}
							className="text-black cursor-pointer text-base font-semibold decoration-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-black"
						>
							{rota.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
