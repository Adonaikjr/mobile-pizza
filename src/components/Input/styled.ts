import styled from "styled-components/native";

export const ContainerInput = styled.TextInput`
    height: 50px;
    border: solid;
    width: 80%;
    margin-top: 16px;
    border-radius: 5px;
    padding-left: 16px;
    font-size: 18px;
    border:solid 1px ${props => props.theme.border_default};
    background-color: ${props => props.theme.background_500};
    color: azure;
`