import {Container} from './styles';
import { ReactNode } from 'react';

interface IContentProps {
  children?: ReactNode
}

const Content: React.FC<IContentProps> = ({children}) => {
    return (
      <Container>
        {children}
       
      </Container>
    );
  }
  
  export default Content;
