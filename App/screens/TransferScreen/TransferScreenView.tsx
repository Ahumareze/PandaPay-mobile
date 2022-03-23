import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { black, white } from '../../utils/colors';

//Imported Compoents
import Main from './components/Main/Main';
import Transfer from './components/Transfer/Transfer';

import { Button, Loader } from '../../components';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

import { height, width } from '../../utils/dimension';

function TransferScreenView(props) {
    const reciever = useSelector((state: any) => state.mainReducer.reciever);
    const loading = useSelector((state: any) => state.mainReducer.loading);

    const [data, setData] = useState();

    useEffect(() => {
        console.log(reciever)
    }, [reciever]);

    let view = (
        <Main />
    )
    if(reciever){
        view = (
            <Transfer />
        )
    }

    let qrView = (
        <QRCodeScanner 
            onRead={r => read(r)}
            // flashMode={RNCamera.Constants.FlashMode.torch}
            topContent={
            <Text style={styles.centerText}>
                Go to{' '}
                <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
                your computer and scan the QR code.
            </Text>
            }
            bottomContent={
                <TouchableOpacity style={styles.buttonTouchable} onPress={() => setData(null)} >
                    <Text style={styles.buttonText}>OK. Got it!</Text>
                </TouchableOpacity>
            }
        />
    )
    if(data){
        qrView = (
            <Button onClick={() => setData(null)} title='restart' />
        )
    }

    const read = (e) => {
        console.log(e);
        setData(e)
    }

    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>New Transaction</Text>
            {!loading ? view : <Loader />} */}
            {qrView}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: white,
        paddingBottom: 30,
        paddingRight: 10,
        paddingLeft: 10,
        width: width,
        height: height
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: black,
        textAlign: 'center'
    },
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
      },
      textBold: {
        fontWeight: '500',
        color: '#000'
      },
      buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
      },
      buttonTouchable: {
        padding: 16
      }
})

export default TransferScreenView;