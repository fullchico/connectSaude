import React from 'react';
import AppLoading from 'expo-app-loading'

import {StatusBar} from 'expo-status-bar'
import { ThemeProvider } from 'styled-components';
import { SignIn } from './src/screens/SignIn';

// estilos globais 
import theme from './src/global/styles/theme';

// importando fontes 
import {
   useFonts,
   Poppins_400Regular,
   Poppins_500Medium, 
   Poppins_700Bold } from '@expo-google-fonts/poppins';

   import {Scheduling} from './src/screens/Scheduling'
import { Home } from './src/screens/Home';

export default function App() {
  
  const [fontsLoad] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  if(!fontsLoad) return <AppLoading/>;

  return (
    <ThemeProvider theme={ theme }>
      <Home/>
      <StatusBar style="auto"/>
    </ThemeProvider>
  );
}


