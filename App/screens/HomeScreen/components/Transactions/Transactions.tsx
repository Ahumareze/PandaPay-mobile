import React, {FC} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TransactionItem from './TransactionItem';

//Imported utilities
import {images} from '../../../../utils/images';
import { black, darkGreen, strokeColor } from '../../../../utils/colors';
import { height, width } from '../../../../utils/dimension';

interface TransactionProps{
    history: any
}

const Transactions:FC<TransactionProps> = ({history = []}):JSX.Element => {

    let view = <Text>No transaction made</Text>
    if(history.length > 0){
        <>
            <TransactionItem img={images[1]} username='stephen_curry' date='13 Mar 2022' amount={230} type='credit' />
            <TransactionItem img={images[2]} username='kalme_steve' date='12 Jan 2022' amount={140} type='debit' />
        </>
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.text}>Transaction</Text>
                <Text style={styles.text2}> History</Text>
            </View>
            <View style={styles.section}>
                {view}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 5,
        height: height,
        width: '100%',
        borderWidth: 1,
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