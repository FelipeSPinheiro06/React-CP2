import { Li, Links, NavHome, TextNav, Ul } from "../Estilos/Estilo";


// Função que retorna o menu que será usado em todas as páginas
function Header() {
  return (
    <NavHome>
      <Ul>
        <Li>
          <Links href="/">
            <TextNav>Home</TextNav>
          </Links>
        </Li>
        <Li>
          <Links href="/oque">
            <TextNav>O que é</TextNav>
          </Links>
        </Li>
        <Li>
          <Links href="/contato">
            <TextNav>Contato</TextNav>
          </Links>
        </Li>
        <Li>
          <Links href="/sobre">
            <TextNav>Sobre mim</TextNav>
          </Links>
        </Li>
      </Ul>
    </NavHome>
  );
}

export default Header;
