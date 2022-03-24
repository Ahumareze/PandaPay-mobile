import React, { useState, FC } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Button, Padding } from '../../../../components';
import AmountInput from '../../../../components/AmountInput/AmountInput';
import { black, red } from '../../../../utils/colors';
import { height } from '../../../../utils/dimension';
import QRCode from 'react-native-qrcode-svg';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../../redux/actions';

const img = require('../../../../assets/cat4.jpg');

interface RecieveProps {
    onClose: () => void
}

const Recieve:FC<RecieveProps> = ({onClose}) => {
    const dispatch = useDispatch();
    const offlineData = useSelector((state: any) => state.mainReducer.offlineData);
    const errorMessage = useSelector((state: any) => state.mainReducer.errorMessage);

    const [amount, setAmount] = useState<string>();
    const [gen, setGen] = useState<boolean>();

    const generateQrcode = () => {
        dispatch(actions.setErrorMessage(null));
        if(amount){
            setGen(true)
        }else{
            dispatch(actions.setErrorMessage('please enter amount'))
        }
    }

    let view = (
        <>
            <AmountInput title='Enter amount' onChange={(e) => setAmount(e)} />
            {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
            <Padding padding={!errorMessage ? 30 : 15 } />
            <Button title='Request payment' onClick={() => generateQrcode()} />
            <TouchableOpacity onPress={() => onClose()}>
                <View style={styles.cancleRecieveContainer}>
                    <Text style={styles.closeText}>Close</Text>
                </View>
            </TouchableOpacity>
        </>
    )
    if(gen){
        view = (
            <>
                <View>
                    <View style={styles.qrContainer}>
                        <QRCode 
                            value={`${offlineData.username} ${offlineData.email} ${offlineData.nft} ${offlineData.id} ${amount}`}
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
    },
    cancleRecieveContainer: {
        height: 50,
        width: '100%',
        marginTop: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    closeText: {
        fontSize: 18,
        color: red
    },
    errorMessage: {
        color: red,
        fontSize: 17,
        paddingTop: 10
    }
})

export default Recieve;