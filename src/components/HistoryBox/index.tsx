import {
    Container
   
 
  } from "./styles";

import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip } from "recharts";

 
  interface IHistoryBoxProps {
    data:{
      month: string;
      amountOutput: number;
      amountEntry: number;  
    }[],
    lineCollorAmountEntry: string,
    lineCollorAmountOutput: string,


  }
  
  const HistoryBox: React.FC<IHistoryBoxProps> = ({data, lineCollorAmountEntry, lineCollorAmountOutput} ) => (
    <Container>
      <h2>Histórico de saldo</h2>

      <ResponsiveContainer>
        <LineChart data={data} >
          <CartesianGrid  strokeDasharray='3 3' stroke="#cecece"/>
          <XAxis dataKey="month" stroke="#cecece"/>
          <Tooltip/>
          <Line type='monotone' dataKey={lineCollorAmountOutput} name="Saídas" stroke="#E44C4E" strokeWidth={5} dot={{ r:5 }} activeDot={{r: 8 }}/>
          <Line type='monotone' dataKey={lineCollorAmountEntry}  name="Entradas" stroke="#F7931B" strokeWidth={5} dot={{ r:5 }} activeDot={{r: 8 }}/>

        </LineChart>



      </ResponsiveContainer>
    </Container>
  );
  
  export default HistoryBox;
  