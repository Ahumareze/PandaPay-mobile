import React, { useEffect } from 'react';
import { StatusBar, View } from 'react-native';

//Imported utilities
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './App/redux/actions';

//Imported Screens
import Navigator from './App/navigation';
import {AuthScreenContainer} from './App/screens';

function App(props) {
  const dispatch = useDispatch();
  const token = useSelector((state: any) => state.authReducer.token)

  useEffect(() => {
    dispatch(actions.init())
  }, []);

  return (
    <View>
      <StatusBar {...props} barStyle={'dark-content'} animated={true} backgroundColor="#fff" />
      {token ? <Navigator/> : <AuthScreenContainer/>}
    </View>
  );
}

export default App;