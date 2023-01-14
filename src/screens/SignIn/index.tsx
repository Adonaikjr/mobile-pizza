import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "../../components/Input";
import { ContainerSignin } from "./styled";
import { TouchButton } from "../../components/TouchButton";
import { useContext, useState } from "react";
import { ContextAuth } from "../../context/teste";

interface typeProps {
    navigation: any
}
export function SignIn({ navigation }: typeProps) {
    const { email, setEmail, password, setPassword, handleSignIn } = useContext(ContextAuth)

    return (

        <ContainerSignin>
            <Image source={require('../../assets/Logo.png')} />
            <Input placeholder="nome" value={email} onChangeText={setEmail} />
            <Input placeholder="senha"  value={password} onChangeText={setPassword} />
            <TouchButton title='Acessar' onPress={handleSignIn} />
        </ContainerSignin>

    )
}