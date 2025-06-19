import Layout from "../../pages/Layout";
import { useParams } from 'react-router-dom';
import produtos from './dados.json';


export const Produto = () => {
	const params = useParams();
	const produto = produtos.find((produto)=>{return produto.id===params.id});

	
	return (
		<>
			<Layout>
				<div>

					meu Produto {id}


				</div>
			</Layout>
		</>
	);
}