import Header from "../Componentes/Header";
import TextoSobre from "../Componentes/TextoSobre";
import { BodyContainer, ImageFoda } from "../Estilos/Estilo";
import FotoSobreMim from "../assets/FotoSobreMim.jpg"

function Sobre() {
  return (
    <>
      {/* Importando o Nav */}
      <Header />
      <ImageFoda src={FotoSobreMim} alt="Minha Foto Linda"/>
      <BodyContainer>
        {/* Importando o texto */}
        <TextoSobre />
        
      </BodyContainer>
      
    </>
  );
}

export default Sobre;
