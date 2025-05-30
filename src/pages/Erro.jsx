import Layout from "./Layout";
import {Link} from 'react-router-dom';

export const Erro = () => {
  return (
    <>
      <Layout>
        <h2 className="title__erro">
          Ops! Página não localizada ou inexistente!
        </h2>

        <img src="https://raw.githubusercontent.com/carlospph/tech/061dbc8eb8bd444701c00e1c2d426896b05ef0a0/2676383.jpg" alt="Homem sentado com cabo desconectado - demostrando que houve erro" className="image__erro"/>

        <Link to="/" className="btn bg-danger text-white mb-3"> Voltar para página inicial</Link>
      </Layout>
    </>
  );
};