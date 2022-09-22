import { useState } from 'react';

import Buscador from '../Buscador';
import Filtros from '../Filtros';
import Itens from '../Itens';
import Ordenador from '../Ordenador';

// TODO verificar pq imagem de cabecalho nao carrega no build do projeto
// estilizacao do componente header no index.css
export default function Cardapio() {
	const [busca, setBusca] = useState('');
	const [filtro, setFiltro] = useState(null);
	const [ordenador, setOrdenador] = useState('');

	return (
		<main className="w-full flex flex-col flex-wrap box-border">
			<section className="">
				<h3 className="text-black text-4xl my-5  px-12 sm:px-72 ">Cardápio</h3>
				<Buscador busca={busca} setBusca={setBusca} />
				<div className="flex items-center flex-wrap mb-7 w-full">
					<Filtros filtro={filtro} setFiltro={setFiltro} />
					<Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
				</div>
				<Itens busca={busca} filtro={filtro} ordenador={ordenador} />
			</section>
		</main>
	);
}
