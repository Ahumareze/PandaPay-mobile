import React from 'react';
import { StatusBar, View } from 'react-native';
import { AuthScreenContainer } from './App/screens';

function App(props) {
  return (
    <View>
      <StatusBar {...props} barStyle={'dark-content'} animated={true} backgroundColor="#fff" />
      <AuthScreenContainer />
    </View>
  );
}

export default App;