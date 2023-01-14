import { Button, View } from "react-native";
import { ContainerButton } from "../../components/TouchButton/styled";
import { Input } from "../../components/Input";
import { Title } from "../Dashboard/styled";
import {
    ContainerCadastro, SectionContainer,
} from "./styled";
import { TouchButton } from "../../components/TouchButton";
import { ButtonAddItem } from "../../components/ButtonAddItem ";

interface typeProps {
    navigation: any
}

export function Cadastro({ navigation }: typeProps) {
    return (
        <ContainerCadastro>
            <Title>Mesa XXX</Title>
            <Input />
            <Input />
            <Input placeholder="Quantidade" />
            <SectionContainer>
                <ButtonAddItem title='+' />
                <TouchButton title='Avançar' onPress={() => navigation.push('finish') }/>
            </SectionContainer>
        </ContainerCadastro>
    )
}