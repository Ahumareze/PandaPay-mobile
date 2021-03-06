import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { black, red, white } from '../../utils/colors';

//Imported Compoents
import { RNCamera } from 'react-native-camera';
import Main from './components/Main/Main';
import Transfer from './components/Transfer/Transfer';
import { Button, Loader } from '../../components';
import QRCodeScanner from 'react-native-qrcode-scanner';
import SuccessScreen from './components/SuccessScreen';

//Imported utilities
import { height, width } from '../../utils/dimension';
import * as actions from '../../redux/actions';


function TransferScreenView(props) {
    const dispatch = useDispatch();
    const reciever = useSelector((state: any) => state.mainReducer.reciever);
    const loading = useSelector((state: any) => state.mainReducer.loading);
    const openQr = useSelector((state: any) => state.mainReducer.isScan);
    const successScreen = useSelector((state: any) => state.mainReducer.successScreen);

    const [data, setData] = useState();

    const read = (e) => {
        dispatch(actions.qrData(e.data))
    }

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
            containerStyle={styles.qrContainer}
            cameraContainerStyle={styles.cameraStyle}
            onRead={r => read(r)}
            bottomContent={
                <TouchableOpacity style={styles.buttonTouchable} onPress={() => setData(null)} >
                    <Button title='Cancle' onClick={() => dispatch(actions.setIsScan(false))} />
                </TouchableOpacity>
            }
        />
    )

    const container = (
        <View style={styles.container}>
            <Text style={styles.title}>New Transaction</Text>
            {!loading ? view : <Loader />}
            {successScreen && <SuccessScreen /> }
        </View>
    )

    return (
        <>
            {openQr ? qrView : container}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: white,
        paddingBottom: 30,
        paddingRight: 10,
        paddingLeft: 10,
        width: width,
        height: height,
        overflow: 'hidden'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: black,
        textAlign: 'center',
        paddingTop: 10
    },
    qrContainer: {
        backgroundColor: white
    },
    cameraStyle: {
        height: 300,
        width: width - 40,
        marginRight: 'auto',
        marginLeft: 'auto',
        borderRadius: 15,
        overflow: 'hidden'
    },
    buttonText: {
        fontSize: 21,
        color: red,
    },
    buttonTouchable: {
        paddingTop: 0,
        width: width - 40
    }
})

export default TransferScreenView;