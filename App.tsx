import React from 'react';
import { StatusBar } from 'react-native';
import { AuthScreenContainer } from './App/screens';

function App(props) {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <AuthScreenContainer />
    </>
  );
}

export default App;