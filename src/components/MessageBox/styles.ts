
import styled from "styled-components";

export const Container = styled.div`
    height: 260px;
    background-color: ${props => props.theme.color.tertiary};
    color: ${props => props.theme.color.white};
    border-radius: 10px;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;


    >header  h1{
        font-size: 30px
    }
    >header  img{
        width: 35px
    }
    >header  p{
        font-size: 18px;
    }

    > footer  span{
        font-size: 15px;
    }
`