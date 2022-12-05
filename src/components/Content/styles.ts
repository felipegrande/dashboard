import styled from "styled-components";

export const Container = styled.div`
    grid-area: CT;
    background-color: ${props => props.theme.color.primary};

    padding: 1.5rem;
    height: calc(100vh - 70px);
    overflow-y: scroll;

    ::-webkit-scrollbar{
        width: 10px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: ${props => props.theme.color.secondary};
        border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
        background-color: ${props => props.theme.color.tertiary};

    }
`;
