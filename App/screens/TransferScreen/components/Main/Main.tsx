import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//Imported Components
import { Button, Input, Padding } from '../../../../components';
import Icon from 'react-native-vector-icons/AntDesign';

//Imported utilities
import { black, red } from '../../../../utils/colors';
import * as actions from '../../../../redux/actions';

function Main(props) {
    const dispatch = useDispatch();
    const [user, setUser] = useState<string>();
    const errorMessage = useSelector((state: any) => state.mainReducer.errorMessage);

    const setReciever = () => {
        dispatch(actions.getReciever(user))
    };

    const openQr = () => {
        dispatch(actions.setIsScan(true))
    }

    return (
        <View>
            <View style={styles.Form}>
                <Input label='Enter recieving email' type={'email-address'} secure={false} onChange={(e) => setUser(e)} />
                {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text> }
                <Padding padding={!errorMessage ? 30 : 15} />
                <Button title='Continue' onClick={() => setReciever()}  />
            </View>
            <TouchableOpacity onPress={() => openQr()} >
                <View style={styles.QrCodeSelect}>
                    <Text style={styles.qrText}>Scan QRcode</Text>
                    <Icon name="scan1" size={40} color={black} style={styles.icon} />
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    Form: {
        paddingTop: 30
    },
    QrCodeSelect: {
        width: 200,
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingTop: 50
    },
    qrText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: black,
        textAlign: 'center'
    },
    icon: {
        textAlign: 'center',
        paddingTop: 10
    },
    errorMessage: {
        fontSize: 17,
        color: red,
        paddingTop: 10
    }
})

export default Main;