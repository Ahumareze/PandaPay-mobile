import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//Imported Components
import { Button, Input } from '../../../../components';
import { black } from '../../../../utils/colors';
import Icon from 'react-native-vector-icons/AntDesign';

import * as actions from '../../../../redux/actions';

function Main(props) {
    const dispatch = useDispatch();
    const [user, setUser] = useState<string>();

    const setReciever = () => {
        dispatch(actions.getReciever(user))
    };

    const openQr = () => {
        dispatch(actions.setIsScan(true))
    }

    return (
        <View>
            <View style={styles.Form}>
                <Input label='Enter recieving username' type={'default'} secure={false} onChange={(e) => setUser(e)} />
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
    }
})

export default Main;