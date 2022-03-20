import React from 'react';
import { StatusBar, View } from 'react-native';
import Navigator from './App/navigation';

function App(props) {
  return (
    <View>
      <StatusBar {...props} barStyle={'dark-content'} animated={true} backgroundColor="#fff" />
      <Navigator />
    </View>
  );
}

export default App;