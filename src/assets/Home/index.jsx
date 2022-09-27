/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */
import { useNavigate } from 'react-router-dom';
import cardadio from '../data/cardapio.json';
import nossaCasa from '/img/casa.png';

export default function Home() {
	let pratosRecomendados = [...cardadio];
	pratosRecomendados = pratosRecomendados
		.sort(() => 0.5 - Math.random())
		.splice(0, 3);

	const navigate = useNavigate();

	function redirecionaPratos(params) {
		navigate(`/pratos/${params.id}`, { state: { params }, replace: false });
	}

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
							onClick={() => {
								redirecionaPratos(item);
							}}
						>
							Ver mais
						</button>
					</div>
				))}
			</div>
			<h3 className="titulo"> Nossa casa </h3>
			<div className="mb-[100px] relative w-11/12 mx-auto">
				<img src={nossaCasa} alt="Casa do aluroni" className="rounded w-full" />
				<div className="flex flex-col h-24 justify-center absolute w-[200px] items-center bg-black rounded bottom-[-45px] text-white font-bold left-0 right-0 mx-auto">
					Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
				</div>
			</div>
		</section>
	);
}
