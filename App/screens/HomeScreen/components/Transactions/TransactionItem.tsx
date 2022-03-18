import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { strokeColor } from '../../../../utils/colors';

const img = require('../../../../assets/cats3.png');

function TransactionItem(props) {
    return (
        <View style={styles.container}>
            <View style={styles.v1}>
                <ImageBackground source={img} />
            </View>
            <View style={styles.v2} />
            <View style={styles.v3} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 70,
        width: '100%',
        borderWidth: 2,
        borderColor: strokeColor,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row'
    },
    v1: {
        height: '100%',
        width: 55,
        backgroundColor: 'red'
    },
    v2: {
        height: '100%',
        flex: 1,
        backgroundColor: 'cyan'
    },
    v3: {
        height: '100%',
        width: 50,
        backgroundColor: 'blue'
    }
})

export default TransactionItem;