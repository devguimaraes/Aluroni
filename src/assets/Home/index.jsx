import cardadio from '../data/cardapio.json';

export default function Home() {
	let pratosRecomendados = [...cardadio];
	pratosRecomendados = pratosRecomendados
		.sort(() => 0.5 - Math.random())
		.splice(0, 3);

	return (
		<section>
			<h3 className="text-black text-5xl m-5">Recomendações da Cozinha</h3>
			<div className="rounded-sm flex flex-wrap gap-7 justify-around">
				{pratosRecomendados.map((item) => (
					<div key={item.id} className="recomendado">
						<div className="w-72 mb-2">
							<img
								src={item.photo}
								alt={item.title}
								className="rounded-lg w-full"
							/>
						</div>
						<button
							type="button"
							className="bg-red border-none rounded-md text-white font-bold cursor-pointer py-3 text-sm ease-in duration-200 w-full hover:bg-black"
						>
							Ver mais
						</button>
					</div>
				))}
			</div>
		</section>
	);
}
