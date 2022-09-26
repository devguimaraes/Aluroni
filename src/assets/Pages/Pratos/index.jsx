import { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import cardapio from '../../data/cardapio.json';

export default function Pratos() {
	const { id } = useParams();
	const navigate = useNavigate();

	const pratoSelecionado = cardapio.find((item) => item.id === Number(id));
	if (!pratoSelecionado) return '';

	const [prato] = useState([pratoSelecionado]);

	useEffect(() => {
		if (
			(id && pratoSelecionado === null) ||
			(id && pratoSelecionado === undefined)
		) {
			navigate('/');
		}
	});

	return (
		<>
			{prato.map((itens) => (
				<div key={itens.id} className="my-10 mx-5">
					<div className="flex justify-around items-center mb-5">
						<h2 className="text-black text-center text-2xl font-bold">
							{itens.title}
						</h2>
						<span
							className={
								(itens.category.id === 1 && 'massas') ||
								(itens.category.id === 2 && 'carnes') ||
								(itens.category.id === 3 && 'combos') ||
								(itens.category.id === 4 && 'veganos')
							}
						>
							{itens.category.label}
						</span>
					</div>
					<img
						src={itens.photo}
						className="w-full md:w-2/6 mx-auto rounded-xl"
						alt={itens.title}
					/>
					<p className="mt-5 font-semibold text-center">
						{itens.description} <br /> Peso: {itens.size}g
					</p>
					<p className="mt-5 font-semibold text-center">
						Serve: {itens.serving}
						{itens.serving === 1 ? ' pessoa' : ' pessoas'}
					</p>
					<p className="mt-5 font-bold text-red text-xl text-center">
						R${itens.price.toFixed(2)}
					</p>
					<button
						type="button"
						key={itens.id}
						onClick={() => {
							navigate(-1);
						}}
					>
						{'< Voltar'}
					</button>
				</div>
			))}
		</>
	);
}
