import FormCadastro from "../components/FormCadastro/FormCadastro.jsx";
import { Section } from "../components/section/Section";
import Layout from "./Layout.jsx";
import styled from 'styled-components';

const Container = styled.div`
    max-width:1440px;
    padding: 0 1rem;
    margin: 1rem 0;
`;

export const NewUser = () => {
    return(
         <Layout>
            <Container>
                <Section 
                    title="Cadastro de usuário"
                    alinhamento="text-center"
                    size="fontStyle"
                >
                </Section>

                <FormCadastro/>

            </Container>
        </Layout>
     )
     
}

