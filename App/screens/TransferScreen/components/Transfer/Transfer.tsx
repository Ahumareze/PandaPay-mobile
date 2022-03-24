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
    const offlineData = useSelector((state: any) => state.mainReducer.offlineData);
    const errorMessage = useSelector((state: any) => state.mainReducer.errorMessage);
    const dispatch = useDispatch();

    const transfer = () => {
        dispatch(actions.setErrorMessage(null))
        if(offlineData.id === recieverDetails.id){
            dispatch(actions.setErrorMessage('Cannot transfer money to yourself'))
        }else{
            dispatch(actions.transfer(
                offlineData.username,
                recieverDetails.username,
                amount
            ))
        }
    }

    return (
        <View style={styles.container}>
            <UserDetails username={recieverDetails.username} email={recieverDetails.email} nft={recieverDetails.nft} />
            <View style={styles.main}>
                <AmountInput amount={amount} title='Enter amount' onChange={(e) => dispatch(actions.setSendAmount(e))} />
                {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text> }
                <Padding padding={!errorMessage ? 30 : 15} />
                <Button title='Continue' onClick={() => transfer()} />
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
    },
    errorMessage: {
        color: red,
        fontSize: 17,
        paddingTop: 10
    }
})

export default Transfer;