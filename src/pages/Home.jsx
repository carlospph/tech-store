import Layout from "./Layout";
// import { Gallery } from "../components/gallery/Gallery";
import { Section } from "../components/section/Section";
import { Collections } from "../components/collections/Collections";
import { DestaqueIcones } from "../components/destaqueIcones/DestaqueIcones";
import { Card } from "../components/card/Card";
import { OfertSpecials } from "../components/ofertSpecials/OfertSpecials";

import { Sliders } from "../components/slider/Sliders";
export const Home = () => {
  return (
    <div>
      <Layout>

        {/* inicio do slide - Gallery */}
        {/* <Gallery /> */}
 
        {/* <CarrosselTeste /> */}

        <Sliders/>
      
        {/* inicio sessão de coleções em destaque */}
        <Section
          title="Coleção em destaque"
          alinhamento="text-left"
          size="fontStyle"
        >
          <Collections />
        </Section>
        {/* fim de sessão de coleções em destaque */}

        {/* inicio da sessão - icones */}
        <Section
          title="Coleção em destaque"
          alinhamento="text-center"
          size="fontStyle"
        >
          <DestaqueIcones />
        </Section>
        {/* fim inicio do slide - icones */}


        {/* inicio dos cards */}
        <Section
          title="Coleção em destaque"
          alinhamento="text-left"
          size="fontStyle"
        >
          <Card/>
          {/* fim dos cards */}

          {/*  fim de ofertas especiais */}

        </Section>


        {/*  inicio de ofertas especiais */}

        <Section
          title="Coleção em destaque"
          alinhamento="text-left"
          size="fontStyle"
        >
        <OfertSpecials />

        </Section>
        {/*  fim de ofertas especiais */}


      </Layout>
    </div>
  );
};
