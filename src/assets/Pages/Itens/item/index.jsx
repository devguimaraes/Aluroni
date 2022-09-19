import logo from '../../../logo.svg';

export default function Item() {
	return (
		<div className="flex flex-wrap w-11/12 m-auto">
			<div className="mt-5 w-[240px] lg:w-[480px]">
				<img src={logo} alt="imagem" className="rounded-xl w-full" />
			</div>
			<div className="flex flex-col flex-1 justify-around  flex-wrap  px-5 md:flex-row mt-5 lg:p-0 lg:flex-row lg:mt-5">
				<div className="titulo">
					<h2 className="text-3xl font-bold mb-5">Macarrao</h2>
					<p className="text-dark-grey text-xl font-semibold mb-5">
						Descricao Macarrao
					</p>
				</div>
				<div className="flex flex-wrap justify-start md:justify-between mb-5 max-w-2xl lg:justify-end m-3">
					<div className="items-center rounded-sm flex font-bold h-10 justify-center py-2 px-7 m-3">
						Massa
					</div>
					<div className="items-center flex text-lg font-bold justify-center py-2 px-7 m-3">
						400g
					</div>
					<div className="items-center flex text-lg font-bold justify-center py-2 px-7 m-3">
						Serve 2 pessoas
					</div>
					<div className="items-center flex font-bold justify-center py-2 px-7 m-3 text-red text-lg">
						R$50,00
					</div>
				</div>
			</div>
		</div>
	);
}
