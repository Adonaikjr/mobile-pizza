import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Dashboard } from "../screens/Dashboard";
import { Cadastro } from "../screens/Cadastro";
import { Finish } from "../screens/Finish";
    export function AppRoutes() {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator initialRouteName="dashboard">
            <Stack.Screen options={{ headerShown: false }} name='dashboard' component={Dashboard} />
            <Stack.Screen name='cadastro' component={Cadastro} />
            <Stack.Screen name='finish' component={Finish}/>
        </Stack.Navigator>
        
    )
}