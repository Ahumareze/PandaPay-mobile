import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from '../../../../components';
import AmountInput from '../../../../components/AmountInput/AmountInput';
import { black } from '../../../../utils/colors';
import { height } from '../../../../utils/dimension';
import QRCode from 'react-native-qrcode-generator';

function Recieve(props) {
    const [amount, setAmount] = useState<string>();
    const [gen, setGen] = useState<boolean>();

    const setValue = (e: string) => {
        const value = JSON.parse(e);
        setAmount(value)
    };

    const generateQrcode = () => {
        setGen(true)
    }

    let view = (
        <>
            <AmountInput title='Enter amount' onChange={(e) => setValue(e)} />
            <Button title='Request payment' onClick={() => generateQrcode()} />
        </>
    )
    if(gen){
        view = (
            <>
                <View>
                    <View style={styles.qrContainer}>
                        <QRCode value={amount} size={200} bgColor='#fff' fgColor='#000' />
                    </View>
                </View>
                <Text>Cancle</Text>
            </>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>~ Recieve cash ~</Text>
            {view}
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
    },
    qrContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40
    }
})

export default Recieve;