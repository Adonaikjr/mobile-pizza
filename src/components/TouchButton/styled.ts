import styled from "styled-components/native";

export const ContainerButton = styled.TouchableOpacity`
    background-color: ${props => props.theme.button_on};
    width: 80%;
    height: 45px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    margin: 5px;
`
export const Text = styled.Text`
    font-size: 24px;
`

