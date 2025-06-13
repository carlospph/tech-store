import Layout from "../../pages/Layout";
import { useParams } from 'react-router-dom';

export const Produto = () => {
	const { id } = useParams();
	return (
		<>
			<Layout>
				<div className="ptt">
				Meu produto {id}
				</div>
			</Layout>
		</>
	);
}