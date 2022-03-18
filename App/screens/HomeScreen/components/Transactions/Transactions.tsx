import React from 'react';
import { View, StyleSheet } from 'react-native';
import { strokeColor } from '../../../../utils/colors';

function Transactions(props) {
    return (
        <View style={styles.container}>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: '100%',
        borderWidth: 2,
        borderColor: strokeColor,
        marginTop: 20,
        elevation: 200,
        shadowColor: 'red',
        color:'#fff'
    }
})

export default Transactions;