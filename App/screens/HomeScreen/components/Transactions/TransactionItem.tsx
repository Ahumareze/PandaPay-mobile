import React, {FC} from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { black, darkerGreen, darkGreen, red, strokeColor } from '../../../../utils/colors';

import {images} from '../../../../utils/images';

interface TransactionItemProps{
    username: string,
    date: string,
    nft: number,
    amount: number,
    type: string
}

const TransactionItem:FC<TransactionItemProps> = ({username, date, nft, amount, type}):JSX.Element => {

    let amountView;
    if(type === 'credit'){
        amountView = <Text style={styles.amount}>+${amount}</Text>
    }else if(type === 'debit'){
        amountView = <Text style={[styles.amount, styles.amount2]}>-${amount}</Text>
    };
    
    return (
        <TouchableOpacity>
        <View style={styles.container}>
            <View style={styles.v1}>
                <ImageBackground source={images[nft]} style={styles.userImg}/>
            </View>
            <View style={styles.v2}>
                <View>
                    <Text style={styles.username}>{username}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>
            </View>
            <View style={styles.v3}>
                {amountView}
            </View>
        </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 70,
        width: '100%',
        borderWidth: 1,
        borderColor: strokeColor,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10
    },
    v1: {
        height: '100%',
        width: 55,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    v2: {
        height: '100%',
        flex: 1,
        display: 'flex',
        justifyContent: 'center'
    },
    v3: {
        height: '100%',
        // width: 50,
        display:  'flex',
        justifyContent: 'center'
    },
    userImg: {
        height: 45,
        width: 45,
        borderRadius: 30,
        overflow: 'hidden'
    },
    username: {
        fontSize: 17,
        color: black,
        paddingLeft: 5,
        fontWeight: 'bold'
    },
    date: {
        fontSize: 15,
        color: black,
        paddingLeft: 5,
        opacity: 0.7
    },
    amount: {
        fontSize: 18,
        fontWeight: 'bold',
        color: darkerGreen,
        paddingRight: 7
    },
    amount2: {
        color: red
    }
})

export default TransactionItem;