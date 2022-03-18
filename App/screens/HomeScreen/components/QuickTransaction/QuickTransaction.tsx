import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QuickButtons from './QuickButtons';

function QuickTransaction() {
    return (
        <View style={styles.container}>
            <View style={styles.v1}>
                <QuickButtons type='send' />
            </View>
            <View style={styles.v2}>
                <QuickButtons type='recieve' />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 130,
        width: '100%',
        display: 'flex',
        flexDirection: 'row'
    },
    v1: {
        height: 130,
        width: '50%',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 20
    },
    v2: {
        height: 130,
        width: '50%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 20
    }
})

export default QuickTransaction;