import { useParams } from 'react-router-dom';

export default function Pratos() {
	const { id } = useParams();
	console.log(id);
	return (
		<>
			<div key={id}>Prato de {id}</div>
			<h2>Bermuda e chinelo</h2>
		</>
	);
}
