
import { ContainerButton, Text } from "./styled";

interface propsType {
    title: string
    onPress: any
}

export function TouchButton({ title, onPress }: propsType) {
    return (
        <ContainerButton onPress={onPress}><Text>{title}</Text></ContainerButton>
    )
}