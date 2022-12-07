import { useMemo, useState} from "react";
import ContentHeader from "../../components/ContentHeader";
import Selectinput from "../../components/SelectInput";

import gain from "../../repositories/gains";
import expenses from "../../repositories/expenses";
import WalletBox from "../../components/walletBox"

import listOfMonths from "../../utils/months";

import { Container, Content   } from "./styles";


const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected ] = useState<string>(String(new Date().getMonth() + 1));
  const [yearSelected, setYearSelected] = useState<string>("2020");



  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    [...expenses, ...gain].forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map((year) => {
      return {
        value: year,
        label: year,
      };
    });
  }, []);

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      };
    });
  }, []);


    return (
      <h1>
        <Container>
          <ContentHeader title="Dashboard" lineColor="#E44C4E">
          <Selectinput
          options={months}
          defaultValue={monthSelected}
          onChange={(e) => setMonthSelected(e.target.value)}
        />
          <Selectinput
            options={years}
            defaultValue={yearSelected}
            onChange={(e) => setYearSelected(e.target.value)}
          />
          </ContentHeader>
          <Content>
            <WalletBox
              title='Saldo'
              amount={150.00}
              footerLabel='Atualizado com base nas entradas e saídas'
              icon="dolar"
              color='#4E41F0'
              
            />
            <WalletBox
              title='Entradas'
              amount={5000.00}
              footerLabel='Atualizado com base nas entradas e saídas'
              icon="arrowUp"
              color='#F7931B'
             
            />
            <WalletBox
              title='Saídas'
              amount={4850.00}
              footerLabel='Atualizado com base nas entradas e saídas'
              icon="arrowDown"
              color='#E44C4E'
             
            />
    
          
          </Content>
        </Container>
      </h1>
    );
  }
  
  export default Dashboard;