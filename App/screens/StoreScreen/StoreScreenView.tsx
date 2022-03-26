import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

//Importd utilities
import { black, white } from '../../utils/colors';
import { height, width } from '../../utils/dimension';
const box = require('../../assets/others/box.png');

function StoreScreenView(props) {
    return (
        <View style={styles.container}>
            <Image source={box} style={styles.box} />
            <Text style={styles.text}>No store availiable at the moment</Text>
            <Text style={styles.extraTtext}>Visit www.pandapay.com to register your store</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        backgroundColor: white,
        paddingLeft: 20,
        paddingRight: 20
    },
    box: {
        height: 80,
        width: 80,
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 100,
    },
    text: {
        fontSize: 20,
        color: black,
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 5
    },
    extraTtext: {
        fontSize: 18,
        color: black,
        opacity: 0.5,
        textAlign: 'center'
    }
})

export default StoreScreenView;