import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from '../../../../components';
import AmountInput from '../../../../components/AmountInput/AmountInput';
import { black } from '../../../../utils/colors';
import { height } from '../../../../utils/dimension';
import QRCode from 'react-native-qrcode-svg';

const img = require('../../../../assets/cat4.jpg');

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
                        <QRCode 
                            value='300'
                            logo={img}
                            logoSize={50}
                            size={200} 
                        />
                    </View>
                </View>
                <View style={styles.cancleContainer}>
                    <Button title='Cancle' onClick={() => setGen(false)} />
                </View>
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
        paddingLeft: 10,
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
        paddingTop: 150,
    },
    cancleContainer: {
        height: 50,
        width: '100%',
        position: 'absolute',
        bottom: 170,
        right: 10
    }
})

export default Recieve;