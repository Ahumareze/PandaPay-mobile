import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//Import utilities
import { darkerGreen, darkGreen, red } from '../../../../utils/colors';
import { height, width } from '../../../../utils/dimension';
import * as actions from '../../../../redux/actions';

//Imported components
import AmountInput from '../../../../components/AmountInput/AmountInput';
import UserDetails from './UserDetails';
import {Button, Padding} from '../../../../components';
import { useDispatch, useSelector } from 'react-redux';

function Transfer(props) {
    //Redux
    const amount = useSelector((state: any) => state.mainReducer.sendAmount);
    const recieverDetails = useSelector((state: any) => state.mainReducer.reciever);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <UserDetails username={recieverDetails.username} email={recieverDetails.email} nft={recieverDetails.nft} />
            <View style={styles.main}>
                <AmountInput amount={amount} title='Enter amount' onChange={(e) => dispatch(actions.setSendAmount(e))} />
                <Padding padding={30} />
                <Button title='Continue' onClick={() => console.log(amount)} />
            </View>
            <TouchableOpacity onPress={() => dispatch(actions.dismiss())} >
                <Text style={styles.dismiss}>Dismiss</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
    },
    main: {
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 20
    },
    dismiss: {
        textAlign: 'center',
        fontSize: 18,
        color: red,
        padding: 10,
    }
})

export default Transfer;