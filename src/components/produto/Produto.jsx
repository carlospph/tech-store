import Layout from "../../pages/Layout";
import { useParams } from 'react-router-dom';
import produtos from './dados.json';


export const Produto = () => {
	const params = useParams();
	const produto = produtos.find((produto)=> { return produto.id === params.id});
	console.log(produto);

	return (
		<>
			<Layout>
				<div>

					{produto.id}
					{produto.titulo}

				</div>
			</Layout>
		</>
	);
}