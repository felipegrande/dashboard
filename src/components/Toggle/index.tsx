
import { Container , ToggleLabel, ToggleSelector  } from "./styles";




const Toggle: React.FC = () => {









  return (
    <Container>
      <ToggleLabel> Ligth</ToggleLabel>
      < ToggleSelector  onChange={() => console.log("mudou")}  checked  uncheckedIcon={false}  checkedIcon={false}/> 
      <ToggleLabel> Dark</ToggleLabel>
    </Container>
  );
};

export default Toggle;