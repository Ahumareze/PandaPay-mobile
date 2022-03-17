import React from 'react';
import { View, StyleSheet } from 'react-native';

//Imported utilities
import { Logo } from '../../../components';
import { height, width } from '../../../utils/dimension';

function Intro() {
    return (
        <View style={styles.container}>
            <Logo />
            <View style={styles.canva}></View>
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
        backgroundColor: 'red'
    },
    canva: {
        height: 300,
        borderWidth: 1,
        borderColor: 'red'
    }
})

export default Intro;