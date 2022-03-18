import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { strokeColor } from '../../../../utils/colors';

function TransactionItem(props) {
    return (
        <View style={styles.container}>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 70,
        width: '100%',
        borderWidth: 2,
        borderColor: strokeColor,
        borderRadius: 10
    }
})

export default TransactionItem;