import React from 'react';
import { StatusBar, View } from 'react-native';
import { HomeScreenContainer } from './App/screens';

function App(props) {
  return (
    <View>
      <StatusBar {...props} barStyle={'dark-content'} animated={true} backgroundColor="#fff" />
      <HomeScreenContainer />
    </View>
  );
}

export default App;