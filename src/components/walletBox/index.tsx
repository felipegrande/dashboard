import { useMemo} from "react";
import CountUp from 'react-countup';

import { Container } from "./styles";

import dolarImg from "../../assets/img/dollar.svg";
import arrowUoImg from "../../assets/img/arrow-up.svg";
import arrowDownImg from "../../assets/img/arrow-down.svg";

interface IWalletBoxProps {
  title: string;
  amount: number;
  footerLabel: string;
  icon: "dolar" | "arrowUp" | "arrowDown";
  color: string;
}

const WalletBox: React.FC<IWalletBoxProps> = ({
  title,
  amount,
  footerLabel,
  icon,
  color,
}) => {

    const iconSelected = useMemo(() => {
        switch (icon) {
            case "dolar":
                return dolarImg;
            case "arrowUp":
              return arrowUoImg;
            case  "arrowDown":
                return arrowDownImg;
            default:
                return undefined
                
        }
    },[icon])

  return (
    <Container color={color}>
      <h1>{title}</h1>
      <h3>
      <CountUp
          end={amount}
          prefix="R$ "
          separator="."
          
          decimal=","
          decimals={2}
      
      /></h3>
      <small>{footerLabel}</small>
      {
        iconSelected &&  <img src={iconSelected} alt="icone do card" />   
      }
      
    </Container>
  );
};

export default WalletBox;
