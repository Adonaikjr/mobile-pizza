
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import {  ContextAuth } from "../context/teste";
import { Dashboard } from "../screens/Dashboard";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {

    const isAdmin  = useContext(ContextAuth)
    const loading = false
    return isAdmin ? <AppRoutes /> : <AuthRoutes />
} 