import styled from "styled-components";

export const NavHome = styled.nav`
  background-color: #040D12;
`;

export const Ul = styled.ul`
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: nowrap;
`;

export const Li = styled.li`
  list-style-type: none;
  flex: 1;
`;

export const Links = styled.a`
  text-decoration: none;
`;

export const TextNav = styled.h5`
  color: white;
`;

export const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const TextSobre = styled.h3`
  width: 50%;
`;

export const Titulo = styled.h1`
  color: Blue;
  font-size: 20px;
`;

export const InformacoesCep = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

export const LightTheme = {
  corFundo: "#ECE3CE",
  corTexto: "#739072",
  corTitulo: "#3A4D39",
};

export const DarkTheme = {
  corFundo: "#5C8374",
  corTexto: "#ECE3CE",
  corTitulo: "#008170",
};

export const Container = styled.div`
  background-color: ${(props) => props.theme.corFundo};
  color: ${(props) => props.theme.corTexto};
`

export const Button = styled.button`
    padding: 10px;
    border: none;
    background-color: #4caf50;
    color: white
    margin: 10px;
`;

export const ImageFoda = styled.img`
  margin-top: 30px;
  width: 300px;
  height: 300px;
  border-radius:50%;
`