import filtros from './filtros.json';

export default function Filtros({ filtro, setFiltro }) {
	function selecionarFiltro(opcaoSelecionada) {
		if (filtro === opcaoSelecionada.id) {
			return setFiltro(null);
		}

		return setFiltro(opcaoSelecionada.id);
	}

	return (
		<div className="w-full flex justify-center sm:justify-start sm:pl-12  lg:pl-72 flex-wrap gap-8 mt-5">
			{filtros.map((event) => (
				<button
					className="items-center bg-black border-0 rounded text-sm font-bold h-10 justify-center w-36 focus:bg-violet-900 text-white hover:cursor-pointer "
					type="button"
					key={event.id}
					onClick={() => {
						selecionarFiltro(event);
					}}
				>
					{event.label}
				</button>
			))}
		</div>
	);
}
