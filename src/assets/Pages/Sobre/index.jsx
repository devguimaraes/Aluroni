/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */
import casa from '/img/casa.png';
import massa1 from '/img/massa1.png';
import massa2 from '/img/massa2.png';

const imagens = [massa1, massa2];

export default function Sobre() {
	return (
		<section className="w-11/12 mx-auto">
			<h3 className="titulo">Sobre</h3>
			<div className="flex flex-col lg:flex-row gap-5  mb-12">
				<img src={casa} alt="Casa Aluroni" />
				<div className="flex flex-col justify-center text-base font-bold text-justify">
					<p className="font-sans">
						Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa
						Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos
						pelos ingredientes tradicionais da culinária Italiana, frescos e de
						excelente qualidade para que sua experiência seja ainda mais
						intensa!
					</p>
					<p className="font-sans">
						Também possuímos uma cardápio de carnes com muitas opções de acordo
						com o seu gosto!
					</p>
					<p className="font-sans">
						Para acompanhar as massas italianas, Aluroni possui uma reserva de
						vinhos especiais, que harmonizam perfeitamente com o seu parto, seja
						carne ou massa!
					</p>
				</div>
			</div>
			<div className="flex flex-wrap gap-5 justify-center lg:justify-between">
				{imagens.map((imagem, index) => (
					<div key={index} className="w-[600px]">
						<img
							src={imagem}
							alt="imagens de pratos feito com massa"
							className="rounded w-full"
						/>
					</div>
				))}
			</div>
		</section>
	);
}
