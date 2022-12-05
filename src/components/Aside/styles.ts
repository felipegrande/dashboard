import styled  from 'styled-components';

export const Container = styled.div`
    grid-area: AS;
    background-color: ${props => props.theme.color.secondary};
    padding:  0 2rem;
    border-right: 1px solid ${props => props.theme.color.gray};

`;
export const Header = styled.header`
    height: 70px;
    display: flex;
    align-items: center;
  
`;




export const LogoImg = styled.img`
  height: 40px;
  width: 40px;
`;

export const Title = styled.h3`
    color: ${props => props.theme.color.white};
    margin-left: 0.5rem;
  
`;
export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin: 3rem 0;

    > .redirect{
        text-decoration: none;

    }
  
`;
export const MenuItemLink = styled.div`
    color: ${props => props.theme.color.white};
    text-decoration: none;
    transition: opacity .3s;
    color: ${props => props.theme.color.info};
    margin: 0.5rem 0;

    &:hover{
        opacity: .7;
    }
  
`;