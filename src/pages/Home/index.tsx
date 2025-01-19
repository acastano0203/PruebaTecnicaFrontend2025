import { FC } from "react";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import Menu from "../../components/Menu";
import { Card } from "../../components/Card";
import ic_roasted_chicken from "../../assets/ic_roasted_carrot.png";

const Home: FC = () => {
  return (
    <Layout>
      <Hero title="recetas de cocina" />
      <Menu />
      <Card
        imagen={ic_roasted_chicken}
        nombreReceta="Receta 1"
        calificacion={4.5}
        esFavorito={true}
        tiempo="30 minutos"
        porciones="4 porciones"
        calorias="200 kcal"
      />
    </Layout>
  );
};

export default Home;
