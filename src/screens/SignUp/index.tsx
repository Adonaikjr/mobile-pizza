import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "../../components/Input";
import { ContainerSignin } from "../SignIn/styled";
import { TouchButton } from "../../components/TouchButton";

interface typeProps {
    navigation: any
}
export function SignUp({ navigation }: typeProps) {
    const handleSubmit = () => {
        navigation.push('signin')
    }
    return (
        <ContainerSignin>
            <Image source={require('../../assets/Logo.png')} />
            <Input placeholder="nome" />
            <Input placeholder="email" />
            <Input placeholder="senha" />
            <TouchButton title='Acessar' onPress={handleSubmit} />
        </ContainerSignin>

    )
}