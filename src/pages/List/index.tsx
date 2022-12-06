import { useMemo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ContentHeader from "../../components/ContentHeader";
import HistoryFinance from "../../components/HistoryFinance";
import Selectinput from "../../components/SelectInput";
import { Container, Content, Filters } from "./styles";

import gain from "../../repositories/gains";
import expenses from "../../repositories/expenses";
import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";
import listOfMonths from "../../utils/months";

interface IData {
  id: string;
  description: string;
  amountFormatted: string;
  frequency: string;
  dateFromatted: string;
  tagColor: string;
}

const List: React.FC = () => {
  const [data, setData] = useState<IData[]>([]);
  const [monthSelected, setMonthSelected ] = useState<string>(String(new Date().getMonth() + 1));
  

  const [yearSelected, setYearSelected] = useState<string>("2020");
  const [selectedFrequency, setSelectedFrequency] = useState(['recorrente', 'eventual']);

  const { type } = useParams();
  const title = useMemo(() => {
    return type === "entry-balance"
      ? {
          title: "Entradas",
          lineColor: "#187D5F",
        }
      : {
          title: "Saídas",
          lineColor: "#CC2A2C",
        };
  }, [type]);

  const dados = useMemo(() => {
    return type === "entry-balance" ? gain : expenses;
  }, [type]);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    dados.forEach((item) => {
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
  }, [dados]);

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      };
    });
  }, []);

  const handleFrequencyClick = (frequency: string) => {
    console.log("antes", selectedFrequency)

      // findIndex retorna o index que o elemente esta no array
      //find retornar o elemento que esta no array

      const alreadySelected = selectedFrequency.findIndex(item => item === frequency);
      if (alreadySelected >= 0){
        //filtra e remo e do array so o mesmo selecionado
        const  filtered =  selectedFrequency.filter(item => item !== frequency)
        setSelectedFrequency(filtered)
      }  else {
        setSelectedFrequency((prev) => [...prev, frequency])

      }

      console.log("depois", selectedFrequency)

   

  };

  useEffect(() => {
    const response = dados.filter((item) => {
      const date = new Date(item.date);
      const month = String(date.getMonth() + 1);
      const year = String(date.getFullYear());
      return month === monthSelected && year === yearSelected  && selectedFrequency.includes(item.frequency);
    });

    const formattedData = response.map((item) => {
      return {
        id: String(Math.random() * dados.length),
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFromatted: formatDate(item.date),
        tagColor: item.frequency === "recorrente" ? "#4E41F0" : "#E44C4E",
      };
    });
    setData(formattedData);
  }, [data.length, monthSelected, yearSelected, selectedFrequency, dados]);

  return (
    <Container>
      <ContentHeader title={title.title} lineColor={title.lineColor}>
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

      <Filters>
        <button
          type="button"
          className={`tag-filter recurrent ${selectedFrequency.includes('recorrente') && 'tag-actived'}`}
          onClick={() => handleFrequencyClick("recorrente")}
        >
          Recorrentes
        </button>
        <button
          type="button"
          className={`tag-filter eventual ${selectedFrequency.includes('eventual') && 'tag-actived'}`}
          onClick={() => handleFrequencyClick("eventual")}
        >
          Eventuais
        </button>
      </Filters>

      <Content>
        {data.map((item) => (
          <HistoryFinance
            key={item.id}
            tagColor={item.tagColor}
            title={item.description}
            subtitle={item.dateFromatted}
            amount={item.amountFormatted}
          />
        ))}
      </Content>
    </Container>
  );
};

export default List;
