import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { black } from '../../utils/colors';

//Imported Compoents
import {Button, Input} from '../../components';
import { width } from '../../utils/dimension';

function TransferScreenView(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>New Transaction</Text>
            <View style={styles.Form}>
                <Input label='Enter recieving username' type={'text'} secure={false} onChange={(e) => console.log(e)} />
                <Button title='Continue' onClick={() => console.log('hello bitches')}  />
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
    }
})

export default TransferScreenView;