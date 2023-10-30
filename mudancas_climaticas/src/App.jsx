import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";
import Contato from "./Pages/Contato";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Button, Container, DarkTheme, LightTheme } from "./Estilos/Estilo";
import Mudança from "./Pages/Mudança";

function App() {
  // Criando o UseState para o tema
  const [theme, setTheme] = useState("light");

  // Fazendo a função de Mudar o tema
  const ThemeChange = () => {
    setTheme((mudar) => (mudar === "light" ? "dark" : "light"));
  };

  return (
    <>
      {/* Trocando os temas caso necessário */}
      <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
        <Container>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/oque" element={<Mudança />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/sobre" element={<Sobre />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </ThemeProvider>

      {/* Botão que ao clicar muda o tema */}
      <Button onClick={ThemeChange}>BOTÃO</Button>
    </>
  );
}

export default App;
