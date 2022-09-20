import { useEffect, useState } from 'react';
import Item from './item';
import cardapio from './itens.json';

export default function Itens(props) {
	const [lista, setlista] = useState(cardapio);
	const { busca, filtro, ordenador } = props;

	function testarBusca(params) {
		const regex = new RegExp(busca, 'i');
		return regex.test(params);
	}

	function testaFiltro(params) {
		if (filtro !== null) return filtro === params;
		return true;
	}

	function ordernar(params) {
		switch (ordenador) {
			case 'porcao':
				return params.sort((a, b) => (a.size > b.size ? 1 : -1));

			case 'qtd_pessoas':
				return params.sort((a, b) => (a.serving > b.serving ? 1 : -1));

			case 'preco':
				return params.sort((a, b) => (a.price > b.price ? 1 : -1));

			default:
				return params;
		}
	}

	useEffect(() => {
		const newList = cardapio.filter(
			(item) => testarBusca(item.title) && testaFiltro(item.category.id)
		);
		setlista(ordernar(newList));
	}, [busca, filtro, ordenador]);

	return (
		<div className="flex flex-col flex-wrap gap-10 w-full">
			{lista.map((itens) => (
				<ul key={itens.id} className="">
					<li className="">
						<Item key={itens.id} itens={itens} />
					</li>
				</ul>
			))}
		</div>
	);
}
