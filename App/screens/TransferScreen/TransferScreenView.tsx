import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { black } from '../../utils/colors';

//Imported Compoents
import {Button, Input} from '../../components';
import { width } from '../../utils/dimension';

import Icon from 'react-native-vector-icons/AntDesign';

function TransferScreenView(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>New Transaction</Text>
            <View style={styles.Form}>
                <Input label='Enter recieving username' type={'text'} secure={false} onChange={(e) => console.log(e)} />
                <Button title='Continue' onClick={() => console.log('hello bitches')}  />
            </View>
            <View style={styles.QrCodeSelect}>
                <Text style={styles.qrText}>Scan QRcode</Text>
                <Icon name="scan1" size={40} color={black} style={styles.icon} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 30,
        width: width - 40,
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: black,
        textAlign: 'center'
    },
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

export default TransferScreenView;