import React from 'react';
import { StatusBar, View } from 'react-native';
import { ProfileScreenContainer } from './App/screens';

function App(props) {
  return (
    <View>
      <StatusBar {...props} barStyle={'dark-content'} animated={true} backgroundColor="#fff" />
      <ProfileScreenContainer />
    </View>
  );
}

export default App;