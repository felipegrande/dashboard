import { Container } from "./styles";
import React from 'react'


interface ISelectInputProps{
    options: {
        
        value: string | number;
        label: string | number;
    }[],
    onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
    defaultValue: string | number;
    

}

const Selectinput: React.FC<ISelectInputProps> = ({options, onChange , defaultValue}) => {



  return (
    <Container>
      <select onChange={onChange} defaultValue={defaultValue}>
        {
           options.map(option =>(
                
                <option key={option.value} value={option.value}>{option.label} 
                

                </option>
            ))
        }
        
      </select>
    </Container>
  );
};

export default Selectinput;