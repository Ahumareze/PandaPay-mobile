import React, {FC} from 'react';
import { View, StyleSheet, Text, Button, TouchableHighlight, TouchableOpacity } from 'react-native';

//Imported components
import LinearGradient from 'react-native-linear-gradient';

//Imported utilities
import { Logo } from '../../../components';
import { height, width } from '../../../utils/dimension';
import {darkGreen, black, medBlack, white, lightGreen, darkerGreen} from '../../../utils/colors';

interface IntroProps {
    getStarted: (e: number) => void
}

const Intro:FC<IntroProps> = ({getStarted}):JSX.Element => {
    return (
        <View style={styles.container}>
            <Logo />
            <View style={styles.canva}>
                <View style={styles.C1}>
                    <LinearGradient colors={[black, medBlack]} style={styles.ball1} />
                </View>
                <View style={styles.C2}>
                    {/* <LinearGradient colors={[black, darkerGreen]}  start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.card} /> */}
                </View>
                <View style={styles.C1}>
                    <LinearGradient colors={[lightGreen, darkGreen, darkerGreen]} style={styles.ball2} />
                </View>
            </View>
            <View style={styles.main}>
                <Text style={styles.mainText}>Transfer money the easy way</Text>
                <TouchableOpacity onPress={() => getStarted(1)} >
                    <LinearGradient colors={[darkGreen, darkerGreen]}  start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={styles.mainButton}>
                        <Text style={styles.mainButtonText}>Get Started</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingRight: 10,
        paddingLeft: 10,
        width: width,
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
        position: 'relative',
        left: -30,
        elevation: 1
    },
    card: {
        height: 150,
        width: 300,
        elevation: 300,
        borderWidth: 1,
        borderColor: '#fff000',
        borderRadius: 20,
    },
    main: {
        width: '100%',
        position: 'absolute',
        bottom: 40,
        left: 10
    },
    mainText: {
        width: 250,
        color: '#000',
        fontSize: 30,
        paddingBottom: 25
    },
    mainButton: {
        height: 50,
        width: 180,
        backgroundColor: darkGreen,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainButtonText: {
        color: '#fff',
        fontSize: 18
    }
})

export default Intro;