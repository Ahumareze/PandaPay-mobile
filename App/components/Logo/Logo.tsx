import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

//Import utilities
import {darkGreen} from '../../utils/colors';

function Logo() {
    return (
        <View style={styles.container}>
            <Text style={styles.T1}>Panda</Text><Text style={[styles.T1, styles.T2]}> Pay</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
    T1:{
        fontSize: 20,
        fontWeight:'bold',
        color: '#000'
    },
    T2: {
        color: darkGreen
    }
})

export default Logo;