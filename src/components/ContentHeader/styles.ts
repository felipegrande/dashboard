import styled  from 'styled-components';

interface IContainerProps{
    lineColor: string
}

export const Container = styled.div`
    display: flex;
    justify-content:space-between;
    width: 100%;
    margin-bottom: 3rem;
    

   
`;
export const TitleContainer = styled.div<IContainerProps>`
    >  h2{
       color: ${props => props.theme.color.white};
    }

    &::after{
        content: "";
        display: block;
        width: 55px;
        border-bottom: 10px solid ${props => props.lineColor};
    }

`;
export const Controllers = styled.div`
    display: flex;
    gap: 0.5rem;
`;
