import React from 'react';
import {View, Text} from 'react-native';

//Imported utilities
import {width} from '../../utils/dimension';

const AuthScreenView = () => {
    console.log(width)
    return (
        <View>
            <Text>Hello world</Text>
        </View>
    );
}

export default AuthScreenView;