import { Outlet } from 'react-router-dom';

export default function Header({ children }) {
	return (
		<>
			<header className="h-72 w-full m-auto bg-no-repeat bg-cover flex items-center box-border bg-fotoCabecalho">
				<div className="text-white text-5xl sm:text-7xl  px-12    w-full">
					A casa do código e da massa!
				</div>
			</header>
			<div>
				<Outlet />
				{children}
			</div>
		</>
	);
}
