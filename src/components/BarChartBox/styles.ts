import styled from "styled-components";

interface ILegendProps{
    color: string
}


export const Container = styled.div`
        display: flex;
         width: 100%;
    height:260px;
    background-color: ${props => props.theme.color.tertiary};
    color: ${props => props.theme.color.white};
    border-radius: 10px;
    padding: 30px 20px;
    align-items: center;

 

    `
export const SideLeft = styled.aside`
        >h2{
            font-size: 30px;
        }

`
export const SideRight = styled.main`
        flex-grow: 1;
        height: 150px;
        display: flex;
        justify-content: center;
    


     
    
       


`
export const LegendContainer = styled.ul`

`
export const Legend = styled.li<ILegendProps>`
    list-style-type: none;
    display: flex;
    align-items: center;
    margin: 0.5rem  0;

    > div{
        background-color: ${props => props.color};
        width: 40px ;
        height: 40px;
        border-radius: 5px;
    }

    .value{
        font-size: 16px;
        line-height: 40px;
        text-align: center;
        

    }
    span{
        font-size: 15px;
        margin-left: 0.5rem;

    }

  

`