/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import opcoes from './opcoes.json';

export default function Ordenador({ ordenador, setOrdenador }) {
	const [aberto, setAberto] = useState(false);
	const nomeOrdenador =
		ordenador && opcoes.find((opcao) => opcao.value === ordenador)?.nome;
	return (
		<button
			type="button"
			className="ml-12 md:ml-72 mt-8 items-center bg-black border-0 rounded flex text-base font-bold h-10 justify-between w-[240px] px-10 relative focus:bg-violet-900 focus:text-white"
			onClick={() => {
				setAberto(!aberto);
			}}
			onBlur={() => setAberto(false)}
		>
			<span className="text-white">{nomeOrdenador || 'Ordenar Por'}</span>

			{aberto ? (
				<MdKeyboardArrowUp size={20} color="white" />
			) : (
				<MdKeyboardArrowDown size={20} color="white" />
			)}
			{aberto ? (
				<div className="options">
					{opcoes.map((opcao) => (
						<div
							className="option"
							key={opcao.value}
							onClick={() => {
								setOrdenador(opcao.value);
								console.log(ordenador);
							}}
						>
							{opcao.nome}
						</div>
					))}
				</div>
			) : null}
		</button>
	);
}
