import styled from "styled-components/native"

export const ContainerButtonAddItem = styled.TouchableOpacity`
    border: solid;
    width: 20%;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.button_add};
    border-radius: 5px;
    margin-right: 5px;
`

