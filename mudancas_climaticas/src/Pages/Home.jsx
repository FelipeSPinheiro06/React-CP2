import Header from "../Componentes/Header";
import TextoHome from "../Componentes/TextoHome";
import { BodyContainer } from "../Estilos/Estilo";

function Home() {
  return (
    <>
      <Header />
      <BodyContainer>
        <TextoHome />
      </BodyContainer>
    </>
  );
}

export default Home;
