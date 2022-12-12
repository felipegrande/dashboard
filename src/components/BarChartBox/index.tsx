
import {Container , SideLeft, SideRight , LegendContainer,  Legend} from './styles';
import {ResponsiveContainer, BarChart , Bar, Cell} from 'recharts'

interface IBarChartBoxProps {
    title: string,
    data: {
        name: string,
        amount: number
        percent: number,
        color: string

    }[]
}


const BarChartBox: React.FC<IBarChartBoxProps> = ( {title,data}) => {
    return (
      <Container>
        
            
        <SideLeft>
                <h2>{title}</h2>
                <LegendContainer>
                    {data.map((i) => (
                    <Legend key={i.name} color={i.color}>
                        <div>
                        <p className="value">{i.percent}% </p>
                        </div>
                        <span>{i.name}</span>
                    </Legend>
                    ))}
      </LegendContainer>
             
        </SideLeft>
        <SideRight>
            <ResponsiveContainer>
                <BarChart data={data}>
                    <Bar  dataKey="amount">
                        {
                            data.map((i) =>(
                                <Cell
                                    key={i.name}
                                    fill={i.color}
                                    cursor="pointer"
                                
                                />
                            ))
                        }
                    </Bar>
                  

                </BarChart>
            </ResponsiveContainer>
            
        </SideRight>
       
      </Container>
    );
  }
  
  export default BarChartBox;
