import styled from "styled-components";
import  Switch, {ReactSwitchProps}  from "react-switch" ;

export const Container = styled.div`
display: flex;
align-items:center;
    
`;
export const ToggleLabel = styled.div`
    color: ${props => props.theme.color.white};
    margin:  0 0.5rem;
`;


export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
    ({theme}) => ({
        onColor: theme.color.info,
        offColor: theme.color.warning

    }))<ReactSwitchProps>``;