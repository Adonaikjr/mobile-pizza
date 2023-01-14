import { ContainerInput } from "./styled";
interface typeProps {
    placeholder?: string
    value?: string
    onChangeText?: any
    onChange?: any
}
export function Input({ onChange,placeholder, value, onChangeText }: typeProps) {
    return (
        <ContainerInput onChange={onChange} placeholderTextColor='azure' onChangeText={onChangeText} value={value} placeholder={placeholder} />
    )
}