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
					{produto.description}


		 {/* produto."id": "prod1001",
        produto."imageUrl": "/tenis1.png",
         produto."altText": "Tênis Esportivo",
        "discount": "30% off",
        "title": "Tênis",
        "description": "K-Swiss V8 - Masculino",
        "oldPrice": "R$200,00",
        "price": "R$140,00" */}

				</div>
			</Layout>
		</>
	);
} 