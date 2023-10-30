import Header from "../Componentes/Header";

import { Container } from "../Estilos/Estilo";

function Mudança() {
  return (
    <>
      {/* Importando o Nav */}
      <Header />
      
      {/* Importando a div do projeto */}
      <Container>
        <h2>
          Os impactos das mudanças climáticas são vastos e abrangem desde o
          derretimento das calotas polares até o aumento do nível do mar.
          Eventos climáticos extremos, como furacões, secas e inundações,
          tornaram-se mais frequentes e intensos, representando sérias ameaças à
          segurança alimentar, ao acesso à água potável e à saúde da população
          global.
        </h2>

        <h2>
          Além disso, as mudanças climáticas colocam em risco a biodiversidade e
          têm implicações significativas para a economia global. Para enfrentar
          esse desafio, governos, organizações e cientistas estão tomando
          medidas para reduzir as emissões de carbono, promover o uso de
          energias renováveis e incentivar práticas sustentáveis em diversos
          setores.
        </h2>

        <h2>
          A conscientização sobre as mudanças climáticas está crescendo,
          impulsionando a mobilização global. A ação coletiva é fundamental para
          mitigar os impactos em curso e proteger o nosso planeta para as
          gerações futuras. A colaboração entre nações, a implementação de
          políticas ambientalmente responsáveis e a transição para uma economia
          de baixo carbono são passos essenciais nesse caminho rumo a um futuro
          mais sustentável.
        </h2>
      </Container>
    </>
  );
}

export default Mudança;
