import React from 'react';
import { View, StyleSheet } from 'react-native';

//Imported utilities
import { Logo } from '../../../components';
import { height, width } from '../../../utils/dimension';

function Intro() {
    return (
        <View style={styles.container}>
            <Logo />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: width - 20,
        marginRight: 'auto',
        marginLeft: 'auto',
        height: height - 10,
        marginTop: 10
    }
})


export default Intro;