import styled from "styled-components";

interface IContainerProps{
    color: string
}

export const Container = styled.div<IContainerProps>`
    background-color: ${props => props.color};
    height: 150px;
    margin: 2rem 0;
    color: ${props => props.theme.color.white};
    padding: 10px 20px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    width: 100%;

    > img{
        height: 110%;
        position: absolute;
        top: -10px;
        right:-30px;
        opacity:0.3;
    }
    >h1{
        font-size: 18px;
        font-weight: 500;
    }
    > small{
        font-size: 12px;
        position: absolute;
        bottom: 10px;
    }
`;
