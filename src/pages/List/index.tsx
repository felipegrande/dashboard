import  {useMemo, useState, useEffect}  from 'react';
import {  useParams } from 'react-router-dom';
import ContentHeader from "../../components/ContentHeader";
import HistoryFinance from "../../components/HistoryFinance";
import Selectinput from "../../components/SelectInput";
import { Container, Content ,Filters } from "./styles";

import gain from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';

interface IData{
  id: number;
  description:  string;
  amountFormatted: string;
  frequency: string;
  dateFromatted: string;
  tagColor: string

}

const List: React.FC = () => {

  const [data, setData] = useState<IData[]>([]);
  // const [monthSelected, setMonthSelected ] = useState<string>(String(new Date().getMonth() + 1));
  // const [yearSelected, setYearSelected ] = useState<string>(String(new Date().getFullYear()));
   const [monthSelected, setMonthSelected ] = useState<string>('7');
  const [yearSelected, setYearSelected ] = useState<string>('2020');

  useEffect(() =>{
  

    const response =  dados.filter(item => {
      const date = new Date(item.date);
        const month =  String(date.getMonth() +1 );
        const year = String( date.getFullYear());
        return month === monthSelected && year === yearSelected 
    });
    
    const formattedData =  response.map(item => {
      return{
        id: Math.random() * data.length,
        description:  item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFromatted: formatDate(item.date),
        tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E'
      }
    })
    setData(formattedData)
  },[data, monthSelected, yearSelected, data.length])

  const {type} = useParams();
    const title = useMemo(() =>{
      return type === 'entry-balance' ?{
        title: 'Entradas', lineColor: '#187D5F'
        }:{
        title: 'Saídas',lineColor: '#CC2A2C'}
    }
  ,[type])

    const dados = useMemo(() =>{
        return type === 'entry-balance' ? gain : expenses
    },[type])



  const months = [
    { value: 1, label: "Jan" },
    { value: 2, label: "Fev" },
    { value: 3, label: "Mar" },
    { value: 4, label: "Abr" },
    { value: 5, label: "Mai" },
    { value: 6, label: "Jun" },
    { value: 7, label: "Jul" },
    { value: 8, label: "Ago" },
    { value: 9, label: "Set" },
    { value: 10, label: "Out" },
    { value: 11, label: "Nov" },
    { value: 12, label: "Dez" },
  ];
  const years = [
    { value: 2022, label: 2022 },
    { value: 2021, label: 2021 },
    { value: 2020, label: 2020 },
    { value: 2019, label: 2019 },
    { value: 2018, label: 2018 },
    
  ];

  console.log(yearSelected, monthSelected)


  return (
    <Container>
      <ContentHeader title={title.title} lineColor={title.lineColor}>
        <Selectinput options={months} defaultValue={monthSelected} onChange={(e) => setMonthSelected(e.target.value)}/>
        <Selectinput options={years} defaultValue={yearSelected} onChange={(e) => setYearSelected(e.target.value)} />
      </ContentHeader>

      <Filters>
          <button 
            type="button"
            className="tag-filter recurrent"
            >
              Recorrentes
            </button>
          <button 
            type="button"
            className="tag-filter eventual"
            >
              Eventuais
            </button>

      </Filters>

      <Content>

        {
          data.map(item =>(
            <HistoryFinance
            key={item.id}
            tagColor={item.tagColor}
            title={item.description}
            subtitle={item.dateFromatted}
            amount={item.amountFormatted}
          />


          ))


        }
   
            </Content>
    </Container>
  );
};

export default List;
