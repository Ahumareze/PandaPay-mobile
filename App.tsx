import React from 'react';
import { StatusBar, View } from 'react-native';

//Imported utilities
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './App/redux/actions';

//Imported Screens
import Navigator from './App/navigation';
import {AuthScreenContainer} from './App/screens';

function App(props) {
  return (
    <View>
      <StatusBar {...props} barStyle={'dark-content'} animated={true} backgroundColor="#fff" />
      <Navigator />
    </View>
  );
}

export default App;