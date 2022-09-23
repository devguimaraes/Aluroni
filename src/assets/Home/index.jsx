/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */
import cardadio from '../data/cardapio.json';
import nossaCasaImg from '/public/img/nossa_casa.png';

export default function Home() {
	let pratosRecomendados = [...cardadio];
	pratosRecomendados = pratosRecomendados
		.sort(() => 0.5 - Math.random())
		.splice(0, 3);

	return (
		<section>
			<h3 className="titulo">Recomendações da Cozinha</h3>
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
			<h3 className="titulo">Nossa Casa</h3>
			<div className="mb-24 relative w-11/12 m-auto">
				<img
					src={nossaCasaImg}
					alt="Casa do Aluroni"
					className="rounded-md w-full"
				/>
				<div className="flex flex-col items-center bg-black rounded-md bottom-[-45px] text-white font-bold h-24 justify-center absolute  m-auto left-0 right-0 w-48">
					Rua Vergueiro, 385 <br />
					<br />
					Vila Mariana - SP
				</div>
			</div>
		</section>
	);
}
