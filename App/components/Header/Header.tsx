import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import Logo from '../Logo/Logo';

const img = require('../../assets/cat2.png');

function Header(props) {
    return (
        <View style={styles.container}>
            <View style={styles.V1}>
                <Logo />
            </View>
            <View style={styles.V2}>
                <ImageBackground source={img} style={styles.userImg} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 7,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    V1: {
        width: '50%'
    },
    V2: {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-end',
    },
    userImg: {
        height: 30,
        width: 30,
        borderRadius: 20,
        backgroundColor: 'red',
        overflow: 'hidden'
    }
})

export default Header;