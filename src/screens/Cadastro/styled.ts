import styled from "styled-components/native";
import { ContainerSignin } from "../SignIn/styled";
import { Text } from "../../components/TouchButton/styled";
import { StyleSheet } from "react-native";
export const ContainerCadastro = styled(ContainerSignin)`

`
export const SectionContainer = styled.View`
    border: solid;
    width: 80%;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    margin-top: 10px;
    `

export const NewText = styled(Text)`
    font-size: 20px;
    margin-right: 10px;
    border: solid;
    color: ${props => props.theme.white};
`
