import {Container , Header, LogoImg, MenuContainer , MenuItemLink, Title} from './styles'
import logoImg from '../../assets/img/logo.svg'
import { Link } from "react-router-dom";


const Aside: React.FC = () => {
    return (
      <Container>
        <Header>
            <LogoImg src={logoImg} alt="Logo da Mina carteira"/>
            <Title>Minha Carteira</Title>
        </Header>
        <MenuContainer>
          <Link className='redirect' to="/dashboard">
            <MenuItemLink>
            👽 Dashbioard
            </MenuItemLink>
          </Link>

          <Link  className='redirect' to="/list/entry-balance">
            <MenuItemLink>
            👹  Entradas
            </MenuItemLink>
          
          </Link>

          <Link className='redirect' to="/list/exit-balance">
            <MenuItemLink>
            🎃 Saídas
            </MenuItemLink>
          
          
          </Link>

          <Link className='redirect' to="/list/entry-balance">
            <MenuItemLink>
            🤖 Sair
            </MenuItemLink>
          
          </Link>

        </MenuContainer>
      </Container>
    );
  }
  
  export default Aside;


