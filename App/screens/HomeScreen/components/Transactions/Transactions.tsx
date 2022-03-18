import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { black, darkGreen, strokeColor } from '../../../../utils/colors';
import { width } from '../../../../utils/dimension';
import TransactionItem from './TransactionItem';

function Transactions(props) {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.text}>Transaction</Text>
                <Text style={styles.text2}> History</Text>
            </View>
            <View style={styles.section}>
                <TransactionItem />
            </View>
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
        borderRadius: 15,
        
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 10,
        paddingLeft: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: black
    },
    text2: {
        fontSize: 20,
        fontWeight: 'bold',
        color: darkGreen
    },
    section: {
        width: width - 40,
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingTop: 10
    }
})

export default Transactions;