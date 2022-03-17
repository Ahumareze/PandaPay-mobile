import React from 'react';
import { StatusBar, View } from 'react-native';
import { AuthScreenContainer } from './App/screens';

function App(props) {
  return (
    <View>
      <StatusBar {...props} backgroundColor="#61dafb" />
      <AuthScreenContainer />
    </View>
  );
}

export default App;