import {Container} from './styles';

interface IBarChartBoxProps {
    dados: {
        name: string,
        amount: number
        percent: number,
        color: string

    }[]
}


const BarChartBox: React.FC<IBarChartBoxProps> = (dados) => {
    return (
      <Container>
        Bar char
       
      </Container>
    );
  }
  
  export default BarChartBox;
