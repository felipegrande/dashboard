import Aside from '../Aside';
import Content from '../Content';
import MainHeader from '../MainHeader';
import {Container} from './styles'
import { ReactNode } from 'react';

interface ILayoutProps {
  children?: ReactNode;

}

const Layout: React.FC<ILayoutProps> = ({children}) => {
    return (
      <Container>
            <MainHeader/>
            <Aside/>
            <Content >
              {children}
            </Content>
      </Container>
    );
  }
  
  export default Layout;
