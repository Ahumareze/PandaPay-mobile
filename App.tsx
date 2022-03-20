import React from 'react';
import { StatusBar, View } from 'react-native';
import { TransferScreenContainer } from './App/screens';

function App(props) {
  return (
    <View>
      <StatusBar {...props} barStyle={'dark-content'} animated={true} backgroundColor="#fff" />
      <TransferScreenContainer />
    </View>
  );
}

export default App;