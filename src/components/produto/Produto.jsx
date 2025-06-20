import Layout from "../../pages/Layout";
import { useParams } from 'react-router-dom';
import produtos from './dados.json';

import styled from "styled-components";


const Card = styled.div`
	border:1px solid gray;
	border-radius: 5px;
	text-align:center;
	padding:1.5rem 1rem;
`;

const Ilustration=styled.div`
	width: 100px;
	height:140px;
	background: tomato;
`;


export const Produto = () => {
	const params = useParams();
	const produto = produtos.find((produto)=> { return produto.id === params.id});

	if(!produto){
		<h2>Produto não localizado</h2>
	}
	return (
		<>
			<Layout>

				<Card>

					<Ilustration>Foto</Ilustration>

					<div>{produto.id}</div>

					<div>{produto.title}</div>

					<div>{produto.description}</div>
					
					<div>{produto.oldPrice}</div>
					
					<div>{produto.oldPrice}</div>

					<div>{produto.price}</div>

				</Card>

					{/* produto."id": "prod1001",
					produto."imageUrl": "/tenis1.png",
					produto."altText": "Tênis Esportivo",
					"discount": "30% off",
					"title": "Tênis",
					"description": "K-Swiss V8 - Masculino",
					"oldPrice": "R$200,00",
					"price": "R$140,00" */}

			</Layout>
		</>
	);
} 