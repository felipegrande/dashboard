import styled  from 'styled-components';



interface ITagProps{
    color:string

}

export const Container = styled.li`
        background-color: ${props => props.theme.color.tertiary};
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 1rem;
        margin: 0.5rem 0;
        border-radius: 5px;
        cursor: pointer;
        transition: all .3s;
        position: relative;

        &:hover{
            opacity: .7;
            transform: translate(10px)

        }


    >h3{
        color: ${props => props.theme.color.white}
    }


`;
export const Tag = styled.div<ITagProps>`
        position: absolute;
        left:0;

        width: 10px;
        height:50px;
        background-color: ${props => props.color};
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 1rem;

    h1{
        color: ${props => props.theme.color.white};
        font-size: 20px;
        font-weight: 900
    }
    p{
        color: ${props => props.theme.color.white};
        font-size: 14px
    }



       
`;