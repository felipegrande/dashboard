import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    border-radius: 5px;
    padding: 0.3rem 0.5rem;
    margin: 0.5rem  0;
    font-weight: bold;
    color: ${props => props.theme.color.white};
    background-color: ${props => props.theme.color.warning};
    transition: .3s;

    &:hover{
        opacity: .7;
    }
    
    
    
    `;