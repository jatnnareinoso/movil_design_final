import React from 'react';
import { SafeAreaView } from 'react-native';
import { TareaScreen } from './src/screens/TareaScreen';
import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import { ContadorScreen } from './src/screens/ContadorScreen';

export const App = () => {


  return (
    <SafeAreaView style={{ 
      flex: 1,
      backgroundColor: '#83e1fb'
    }}>
      <HolaMundoScreen />
      <ContadorScreen />
      <TareaScreen />

    </SafeAreaView>
  )
}
