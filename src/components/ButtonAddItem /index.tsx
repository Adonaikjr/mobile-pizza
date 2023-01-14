import { Text } from "../TouchButton/styled";
import { ContainerButtonAddItem } from "./styled";
interface typeProps {
    title: string
}

export function ButtonAddItem({title}: typeProps) {
    return (
        <ContainerButtonAddItem>
            <Text>{title}</Text>
        </ContainerButtonAddItem>
   
    )
}