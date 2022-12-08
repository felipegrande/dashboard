import {
  Container,
  SideLeft,
  LegendContainer,
  Legend,
  SideRigth,
} from "./styles";


import {PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface IPieChartProps {
  data: {
    name: string;
    value: number;
    percent: number;
    color: string;
  }[];
}

const PieChartBox: React.FC<IPieChartProps> = ({ data }) => (
  <Container>
    <SideLeft>
      <h2>Relação</h2>
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
    <SideRigth>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey="percent">
            {data.map((i) => (
              <Cell key={i.name} fill={i.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </SideRigth>
  </Container>
);

export default PieChartBox;
