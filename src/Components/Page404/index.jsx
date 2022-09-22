/* eslint-disable react/self-closing-comp */
import { Link } from 'react-router-dom';
import './style.css';

export default function Page4040() {
	return (
		<div id="notfound">
			<div className="notfound">
				<div className="notfound-404">
					<div></div>
					<h1>404</h1>
				</div>
				<h2>Página não encontrada</h2>
				<p>
					A página que você está procurando pode estar temporariamente
					indisponivel, ter sido removida ou seu nome mudou.
				</p>
				<Link className="a" to="/">
					Página Principal
				</Link>
			</div>
		</div>
	);
}
