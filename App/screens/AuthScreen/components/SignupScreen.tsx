import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//Imported utilities
import { Logo } from '../../../components';
import { height, width } from '../../../utils/dimension';
import {darkGreen, black, medBlack, white, lightGreen, darkerGreen} from '../../../utils/colors';

function SignupScreen() {
    return (
        <View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: width - 20,
        marginRight: 'auto',
        marginLeft: 'auto',
        height: height - 10,
        marginTop: 10,
    },
})

export default SignupScreen;