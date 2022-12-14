import { useMemo, useState} from "react";
import ContentHeader from "../../components/ContentHeader";
import Selectinput from "../../components/SelectInput";

import gain from "../../repositories/gains";
import expenses from "../../repositories/expenses";
import WalletBox from "../../components/walletBox"

import listOfMonths from "../../utils/months";

import { Container, Content   } from "./styles";
import MessageBox from "../../components/MessageBox";

import happyImg from '../../assets/img/happy.svg'
import sadImg from '../../assets/img/sad.svg'
import grinning from '../../assets/img/grinning.svg'
import PieChartBox from '../../components/PieChartBox'
import HistoryBox from "../../components/HistoryBox";
import BarChartBox from "../../components/BarChartBox";




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

  const totalExpenses = useMemo(() => {

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      let total: number = 0;
     
      
      expenses.forEach(item =>{
        const date = new Date(item.date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;

        if(Number(month) === Number(monthSelected) && Number(year) === Number(yearSelected)){
            try{
              total += Number(item.amount)
            }catch{
              throw new Error('Invalid')
          }

        }
      })

      return total
      
  }, [monthSelected ,  yearSelected]);


  const totalGains = useMemo(() => {

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      let total: number = 0;
     
      
      gain.forEach(item =>{
        const date = new Date(item.date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;

        if(Number(month) === Number(monthSelected) && Number(year) === Number(yearSelected)){
            try{
              total += Number(item.amount)
            }catch{
              throw new Error('Invalid')
          }

        }
      })

      return total
      
  }, [monthSelected ,  yearSelected]);


  const totalBalance = useMemo(() => {
    return  totalGains -  totalExpenses;
  }, [ totalExpenses, totalGains]);


  const message = useMemo(() => {
    
    if(totalBalance < 0){
      return{
        title: "Que triste!",
        description: "Neste m??s, voc?? gastou mais que deveria.",
        footerText: "Verifique seus gastos e tente cortar algumas coias desnecess??rias.",
        icon: sadImg
      } 
    }else if(totalBalance === 0){
      return{
        title: "Ufaa!",
        description: "Neste m??s, voc?? gastou exatamente o que ganhou.",
        footerText: "Tenha cuidado. No proximo tente poupar o seu dinheiro",
        icon: grinning
      }
    }else{
      return{
        title: "Muito Bem!",
        description: "Sua carteira est?? positiva!",
        footerText: "Continue assim. Considere investir o seu saldo.",
        icon: happyImg
      }
     

    }
  }, [ totalBalance]);

  const relationExpensesVersusGains = useMemo(() =>{
      const total =  totalExpenses + totalGains
      const gainsPercent =  (totalGains/total) * 100
      const expensesPercent =  (totalExpenses/total) * 100

      const data = [
        {
          name: 'Entradas',
          value: Number(totalGains),
          percent: Number(gainsPercent.toFixed(0)),
          color: '#F7931B'

        },
        {
          name: 'Sa??das',
          value: Number(totalExpenses),
          percent: Number(expensesPercent.toFixed(0)),
          color: '#E44C4E'
        }
      ]
      return data;

  },[totalExpenses, totalGains])

  const historyData = useMemo(() => {

      return listOfMonths.map((_,index) => {
    
  
          let amountEntry = 0;
          gain.forEach(i => {
            const date =new Date(i.date);
            const gainMonth = date.getMonth();
            const gainYear = date.getFullYear();

            if(gainMonth === index && gainYear  === Number(yearSelected)){
               try{
                amountEntry += Number(i.amount);
               } catch{
                 throw new Error('error')
               }

            }
          });
         
          let amountOutput = 0;
        
          expenses.forEach(i => {
            
            const date =new Date(i.date);
            const expensesMonth = date.getMonth();
            const expensesYear = date.getFullYear();

            if(expensesMonth === index && expensesYear  === Number(yearSelected)){
               try{
                amountOutput += Number(i.amount);
            
               } catch{
                 throw new Error('error')
               }

            }
          });
    
          return{
            monthNumber: index,
            month: listOfMonths[index],
            amountOutput,
            amountEntry
          

          }

      })
  },[yearSelected])


  const relationsExpensevesRecurrentVersusEnventual = useMemo(() => {
    let amountRecurent = 0
    let amountEventual = 0

      expenses.filter((expense) => {
        const date = new Date(expense.date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;

        return Number(month) === Number(monthSelected) && Number(year) === Number(yearSelected)
      })
      .forEach((expense) => {
        if(expense.frequency === 'recorrente'){
          return amountRecurent += Number(expense.amount)
        } 
        if(expense.frequency === 'eventual'){
          return amountEventual += Number(expense.amount)
        } 

       

      });

      const total = amountRecurent + amountEventual;
      
      const PercentRecurrent =  Number(((amountRecurent / total)*100).toFixed(0))
      const PercentEventual = Number(((amountEventual / total)*100).toFixed(0))

      return[
        {
          name: 'Recorrente',
          amount: amountRecurent,
          percent: PercentRecurrent ?  PercentRecurrent : 0 ,
          color: '#F7931B'
        },
        {
          name: 'Eventual',
          amount: amountEventual,
          percent: PercentEventual ? PercentEventual : 0 ,
          color: '#E44C4E'
        }
      ]
      


  },[monthSelected, yearSelected])
  


  const relationsGainsRecurrentVersusEnventual = useMemo(() => {
    let amountRecurent = 0
    let amountEventual = 0

      gain.filter((gain) => {
        const date = new Date(gain.date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;

        return Number(month) === Number(monthSelected) && Number(year) === Number(yearSelected)
      })
      .forEach((gain) => {
        if(gain.frequency === 'recorrente'){
          return amountRecurent += Number(gain.amount)
        } 
        if(gain.frequency === 'eventual'){
          return amountEventual += Number(gain.amount)
        } 

       

      });

      const total = amountRecurent + amountEventual;
      
      const PercentRecurrent =  Number(((amountRecurent / total)*100).toFixed(0))
      const PercentEventual = Number(((amountEventual / total)*100).toFixed(0))

      return[
        {
          name: 'Recorrente',
          amount: amountRecurent,
          percent: PercentRecurrent ?  PercentRecurrent : 0 ,
          color: '#F7931B'
        },
        {
          name: 'Eventual',
          amount: amountEventual,
          percent: PercentEventual ? PercentEventual : 0 ,
          color: '#E44C4E'
        }
      ]
      


  },[monthSelected, yearSelected])

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
              amount={totalBalance}
              footerLabel='Atualizado com base nas entradas e sa??das'
              icon="dolar"
              color='#4E41F0'
              
            />
            <WalletBox
              title='Entradas'
              amount={totalGains}
              footerLabel='Atualizado com base nas entradas e sa??das'
              icon="arrowUp"
              color='#F7931B'
             
            />
            <WalletBox
              title='Sa??das'
              amount={totalExpenses}
              footerLabel='Atualizado com base nas entradas e sa??das'
              icon="arrowDown"
              color='#E44C4E'
             
            />
    
          
          </Content>
          <Content>
            <MessageBox
                title={message.title}
                description={message.description}
                footerText={message.footerText}
                icon={message.icon}
            
              />
            <PieChartBox data={relationExpensesVersusGains}/>
          </Content>
          <Content>
            <HistoryBox
            data={historyData}
             lineCollorAmountOutput="#F7931B"
              lineCollorAmountEntry="#E44C4E"/>
          </Content>
          <Content>
            <BarChartBox title="Entradas" data={relationsExpensevesRecurrentVersusEnventual} />
            <BarChartBox title="Sa??das" data={relationsGainsRecurrentVersusEnventual} />
            
          </Content>
        </Container>
      </h1>
    );
  }
  
  export default Dashboard;