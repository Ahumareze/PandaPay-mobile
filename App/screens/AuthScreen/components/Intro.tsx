import React from 'react';
import { View, StyleSheet } from 'react-native';

//Imported utilities
import { Logo } from '../../../components';
import { height, width } from '../../../utils/dimension';
import {darkGreen, black} from '../../../utils/colors';
import LinearGradient from 'react-native-linear-gradient';

function Intro() {
    return (
        <View style={styles.container}>
            <Logo />
            <View style={styles.canva}>
                <View style={styles.C1}>
                    <LinearGradient colors={[darkGreen, black]}>
                        <View style={styles.ball1} />
                    </LinearGradient>
                </View>
                <View style={styles.C2}>

                </View>
                <View style={styles.C1}>
                    <View style={styles.ball2} />
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
        borderWidth: 1,
        borderColor: '#000',
        display: 'flex',
        flexDirection: 'row'
    },
    C1:{
        height: '100%',
        width: '20%',
        borderWidth: 1,
        borderColor: '#000'
    },
    C2: {
        height: '100%',
        width: '60%',
        borderWidth: 1,
        borderColor: '#000'
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
    }
})

export default Intro;