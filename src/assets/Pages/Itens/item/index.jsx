/* eslint-disable react/destructuring-assignment */

import { useNavigate } from 'react-router-dom';

export default function Item({ itens }) {
	const { title, description, category, size, price, serving, photo, id } =
		itens;
	const navigate = useNavigate();

	return (
		<div className="flex flex-wrap w-11/12 m-auto">
			<div className="mt-5 w-[240px] lg:w-[480px]">
				<img src={photo} alt={title} className="rounded-xl w-full" />
			</div>
			<div className="flex flex-col flex-1 justify-around  flex-wrap ml-10  px-5 md:flex-row mt-5 lg:p-0 lg:flex-row lg:mt-5">
				<div className="titulo">
					<h2 className="text-3xl font-bold mb-5">{title}</h2>
					<p className="text-dark-grey text-xl font-semibold mb-5">
						{description}
					</p>
				</div>
				<div className="flex flex-wrap justify-start md:justify-between mb-5 max-w-2xl lg:justify-end m-3">
					<div
						className={
							(category.id === 1 && 'massas') ||
							(category.id === 2 && 'carnes') ||
							(category.id === 3 && 'combos') ||
							(category.id === 4 && 'veganos')
						}
					>
						{category.label}
					</div>
					<button
						type="button"
						className="bg-red border-none rounded-md text-white font-bold cursor-pointer py-3 text-sm ease-in duration-200  my-5  px-12 sm:px-7 hover:bg-black"
						onClick={() => {
							navigate(`/pratos/${id}`);
						}}
					>
						Ver Mais
					</button>
					<div className="items-center flex text-lg font-bold justify-center py-2 px-7 m-3">
						{size} g
					</div>
					<div className="items-center flex text-lg font-bold justify-center py-2 px-7 m-3">
						Serve {serving} pessoa{serving === 1 ? '' : 's'}
					</div>
					<div className="items-center flex font-bold justify-center py-2 px-7 m-3 text-red text-lg">
						R${price.toFixed(2)}
					</div>
				</div>
			</div>
		</div>
	);
}
