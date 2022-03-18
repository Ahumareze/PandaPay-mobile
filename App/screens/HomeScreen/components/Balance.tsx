import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { black } from '../../../utils/colors';

function Balance(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.accText}>Account balance:</Text>
            <Text style={styles.accBal}>$300</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingBottom: 30,
        width: '100%',
    },
    accText: {
        color: black,
        textAlign: 'center',
        fontSize: 17,
        opacity: 0.5,
    },
    accBal: {
        fontSize: 40,
        textAlign: 'center',
        color: black
    }
})

export default Balance;