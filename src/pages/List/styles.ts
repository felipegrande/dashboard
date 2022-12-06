import styled from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: column;`;

export const Content = styled.main``;

export const Filters = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 3rem;


    .tag-filter{
        font-size: 18px;
        font-weight: 500;
        background: none;
        color: ${props => props.theme.color.white};
        transition: opacity .3s;
        opacity: 0.3;
        :hover{
            opacity: .7;
        }

    

    }
    .recurrent::after{
            content: "";
            display: block;
            width: 55px;
            margin: 0 auto;
            border-bottom: 10px solid ${props => props.theme.color.sucess}
    }
    .eventual::after{
            content: "";
            display: block;
            width: 55px;
            margin: 0 auto;
            border-bottom: 10px solid ${props => props.theme.color.warning}
    }
    .tag-actived{
        opacity: 1;
    }
    
    
`;