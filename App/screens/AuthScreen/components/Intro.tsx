import React from 'react';
import { View, StyleSheet } from 'react-native';

//Imported utilities
import { Logo } from '../../../components';
import { height, width } from '../../../utils/dimension';
import {darkGreen, black, medBlack, white, lightGreen, darkerGreen} from '../../../utils/colors';
import LinearGradient from 'react-native-linear-gradient';

function Intro() {
    return (
        <View style={styles.container}>
            <Logo />
            <View style={styles.canva}>
                <View style={styles.C1}>
                    <LinearGradient colors={[black, medBlack]} style={styles.ball1} />
                </View>
                <View style={styles.C2}>
                    <LinearGradient colors={[white, 'red']} style={styles.card} />
                </View>
                <View style={styles.C1}>
                    <LinearGradient colors={[lightGreen, darkGreen, darkerGreen]} style={styles.ball2} />
                </View>
            </View>
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
    canva: {
        height: 300,
        display: 'flex',
        flexDirection: 'row'
    },
    C1:{
        height: '100%',
        width: '20%'
    },
    C2: {
        height: '100%',
        width: '60%'
    },
    ball1: {
        height: 120,
        width: 120,
        borderRadius: 100,
        backgroundColor: black,
        position: 'relative',
        left: -30,
        top: '60%'
    },
    ball2: {
        height: 120,
        width: 120,
        borderRadius: 100,
        backgroundColor: black,
        position: 'relative',
        left: -30,
        zIndex: 0
    },
    card: {
        height: 150,
        width: 300,
        elevation: 200
    }
})

export default Intro;