import { FcSearch } from 'react-icons/fc';

export default function Buscador({ busca, setBusca }) {
	return (
		<div className="bg-grey  sm:ml-72 flex items-center rounded gap-4 h-10 justify-between w-[350px] m-auto ">
			<input
				className=" bg-grey border-0 text-base font-bold outline-none  placeholder:text-black px-12 "
				value={busca}
				placeholder="Digite o prato desejado"
				onChange={(evento) => {
					setBusca(evento.target.value);
				}}
				type="text"
			/>
			<FcSearch size={30} />
		</div>
	);
}
