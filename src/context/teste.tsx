import { createContext, ReactNode, useState } from "react";

interface typeProps {
    children: ReactNode
}
type propsContextAuthData = {
    isAdmin: boolean
    email: string
    password: string
    handleSignIn: () => void
    setPassword: any
    setEmail: any
    setIsAdmin: any
    value: any
}

export const ContextAuth = createContext({} as propsContextAuthData)

export function Context({ children }: typeProps) {
    const [isAdmin, setIsAdmin] = useState(false)
    const [email, setEmail] = useState<String>('')
    const [password, setPassword] = useState<String>('')


    function handleSignIn() {
        if (email === 'adonaikjr' && password === '123') {
            setIsAdmin(true)
        } else {
            alert('Ops, parece que você não está cadastrado')
        }
    }

    return (
        <ContextAuth.Provider value={{ isAdmin, handleSignIn, setPassword, setEmail, setIsAdmin }} >
            {children}
        </ContextAuth.Provider>
    )
}