import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from '../../../../components';
import AmountInput from '../../../../components/AmountInput/AmountInput';
import { black } from '../../../../utils/colors';
import { height } from '../../../../utils/dimension';

function Recieve(props) {
    const [amount, setAmount] = useState<string>();

    const setValue = (e: string) => {
        const value = JSON.parse(e);
        setAmount(value)
    };

    const generateQrcode = () => {
        console.log(amount)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>~ Recieve cash ~</Text>
            <AmountInput title='Enter amount' onChange={(e) => setValue(e)} />
            <Button title='Request payment' onClick={() => generateQrcode()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: height,
        width: '100%',
        paddingRight: 10,
        paddingLeft: 10
    },
    title: {
        fontSize: 18,
        color: black,
        paddingTop: 30,
        textAlign: 'center'
    }
})

export default Recieve;