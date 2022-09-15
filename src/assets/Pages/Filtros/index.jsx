import filtros from './filtros.json';

export default function Filtros() {
	function selecionarFiltro(opcaoSelecionada) {
		console.log(opcaoSelecionada.label);
	}
	return (
		<div className="w-full flex justify-center sm:justify-start sm:pl-12  lg:pl-72 flex-wrap gap-8 mt-5">
			{filtros.map((event) => (
				<button
					className="items-center bg-black border-0 rounded text-sm font-bold h-10 justify-center w-36 active:bg-blue-800 text-white hover:cursor-pointer"
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
