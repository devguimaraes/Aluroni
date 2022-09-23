import SVG from 'react-inlinesvg';
import logo from '../../assets/logo.svg';

export default function Footer() {
	return (
		<footer className="bg-darkness flex justify-center p-3">
			<SVG src={logo} title="logo Aluroni" />
		</footer>
	);
}
