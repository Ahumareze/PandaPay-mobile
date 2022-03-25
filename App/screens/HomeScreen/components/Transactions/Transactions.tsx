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

const Transactions:FC<TransactionProps> = ({history}):JSX.Element => {

    let view = <Text>No transaction made</Text>
    if(history?.length > 0){
        view = (
            <>
                {history.map(i => (
                    <TransactionItem 
                        nft={i.nft} 
                        username={i.name} 
                        amount={i.amount} 
                        type={i.type} 
                        date={i.date}
                        key={i.amount}
                    />
                ))}
            </>
        )
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