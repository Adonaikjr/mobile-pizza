import { Routes } from './src/routes';
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './src/themes/Default';
import { Context } from './src/context/teste';

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={defaultTheme}>
        <Context>
          <Routes />
        </Context>
      </ThemeProvider>
    </NavigationContainer>

  );
}


