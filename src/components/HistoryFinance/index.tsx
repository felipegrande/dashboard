
import { Container, Tag ,Content  } from "./styles";


interface IHistoryFinanceProps{
    tagColor: string;
    title: string;
    subtitle: string;
    amount: string; 
}

const HistoryFinance: React.FC <IHistoryFinanceProps>  = ({ tagColor, title, subtitle, amount}) => {


  return (
    <Container  >
      <Tag color={tagColor}/>
      <Content>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </Content>
      <h3>{amount}</h3>
  
    </Container>
  );
};

export default HistoryFinance;