import React from 'react';
import { StatusBar, View } from 'react-native';
import { AuthScreenContainer } from './App/screens';

function App(props) {
  return (
    <>
      <StatusBar {...props} bg='red' />
      <AuthScreenContainer />
    </>
  );
}

export default App;