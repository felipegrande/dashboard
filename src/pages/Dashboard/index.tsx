import ContentHeader from "../../components/ContentHeader";
import Selectinput from "../../components/SelectInput";

import { Container  } from "./styles";


const Dashboard: React.FC = () => {

  const options= [
    {value: 'janeiro', label: 'Janeiro'},
    {value: 'fevereiro', label: 'Fevereiro'}

  ]
    return (
      <h1>
        <Container>
          <ContentHeader title="Dashboard" lineColor="black">
              <Selectinput options={options} defaultValue={'janeiro'} onChange={() => {}} />
              <Selectinput options={options} defaultValue={'fevereiro'} onChange={() => {}}/>
          </ContentHeader>
        </Container>
      </h1>
    );
  }
  
  export default Dashboard;