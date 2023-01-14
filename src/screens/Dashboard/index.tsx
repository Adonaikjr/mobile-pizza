import { TouchButton } from "../../components/TouchButton";
import { Input } from "../../components/Input";

import { ContainerDashboard, Title } from './styled'
import { useContext } from "react";
import { ContextAuth } from "../../context/teste";
import { Button } from "react-native";

interface typeProps {
    navigation: any
}

export function Dashboard({ navigation }: typeProps) {

    return (
        <ContainerDashboard>
            <Title>Novo Pedido</Title>
            <Input placeholder="Numero da mesa" />
            <TouchButton title='Abrir mesa' onPress={() => navigation.push('cadastro')} />
        </ContainerDashboard>
    )
}