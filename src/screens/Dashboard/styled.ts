import styled from "styled-components/native";
import { ContainerSignin } from "../SignIn/styled";
export const ContainerDashboard = styled(ContainerSignin)`
    border: solid;
`
export const Title = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: ${props => props.theme.white};
`