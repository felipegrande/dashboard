
import { InputHTMLAttributes } from 'react';
import {Container} from'./styles'

type IinputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC <IinputProps> = ({...rest}) =>  (
      <Container {...rest} />
        
    );
 
  
  export default Input;