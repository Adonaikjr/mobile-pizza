import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "../screens/SignIn";
import { SignUp } from "../screens/SignUp";

export function AuthRoutes() {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator initialRouteName="signin">
            <Stack.Screen options={{ headerShown: false }} name='signin' component={SignIn} />
            <Stack.Screen options={{ headerShown: false }} name='signup' component={SignUp} />
        </Stack.Navigator>
    )
}