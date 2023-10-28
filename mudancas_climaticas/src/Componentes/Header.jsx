import { Li, Links, NavHome, TextNav, Ul } from "../Estilos/Estilo";


function Header() {
    return(
        <NavHome>
            <nav>
                <Ul>
                    <ul>
                            <Li><li><Links><a href="/"><TextNav>Home</TextNav></a></Links></li></Li>
                            <Li><li><Links><a href="/"><TextNav>O que é</TextNav></a></Links></li></Li>
                            <Li><li><Links><a href="/help"><TextNav>Venha nos ajudar</TextNav></a></Links></li></Li>
                            <Li><li><Links><a href="/sobre"><TextNav>Sobre mim</TextNav></a></Links></li></Li>
                    </ul>
                </Ul>
            </nav>
        </NavHome>  
    )
}

export default Header;