import Item from './item';
import cardapio from './itens.json';

export default function Itens() {
	return (
		<div className="flex flex-col flex-wrap gap-10 w-full">
			{cardapio.map((itens) => (
				<ul className="">
					<li className="">
						<Item key={itens.id} />
					</li>
				</ul>
			))}
		</div>
	);
}
