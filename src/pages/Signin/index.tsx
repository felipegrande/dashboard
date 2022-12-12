
import {Container,  Logo,  Form,  FormTitile} from'./styles'
import { useState } from 'react';

import logo from '../../assets/img/logo.svg'
import Input from '../../components/Input';
import Button from '../../components/Button';


import {useAuth} from '../../hooks/auth'


const Signin: React.FC = () => {

    const [email, setEmail] = useState("")
    const [password, setPassoword] = useState("")

    const {signIn} = useAuth();

    return (
      <Container>
        <Logo>
          <img  src={logo} alt="logo do site"/>
          <h3>Minha Carteira</h3>
        </Logo>
        <Form onSubmit={() => signIn(email , password)}>
          <FormTitile>
            Entrar
          </FormTitile>
          <Input type="email" required placeholder='e-mail' onChange={(e) => setEmail(e.target.value)}/>
          <Input type="password" required placeholder='Senha'  onChange={(e) => setPassoword(e.target.value)} />
          <Button type="submit">Acessar </Button>


        </Form>
      </Container>
    );
  }
  
  export default Signin;