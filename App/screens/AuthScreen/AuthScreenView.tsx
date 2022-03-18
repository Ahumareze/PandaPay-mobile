import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Logo } from '../../components';

//Imported compoments
import Intro from './components/Intro';
import SignupScreen from './components/SignupScreen';

const AuthScreenView = () => {
    const [screen, setScreen] = useState(0);

    let container;
    if(screen == 0){
        container = <Intro getStarted={(e) => setScreen(e)} />
    }else if(screen == 1){
        container = <SignupScreen nextPage={(e) => setScreen(e)} />
    };

    return (
        <View>
            {container}
        </View>
    );
}

export default AuthScreenView;