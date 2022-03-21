import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { black, inputColor, red } from '../../../../utils/colors';
import * as actions from '../../../../redux/actions';

function AmountInput(props) {
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Enter amount:</Text>
            <View style={styles.inputView}>
                <Text style={styles.currency}>$</Text>
                <TextInput style={styles.input} keyboardType={'numeric'} onChangeText={(e) => dispatch(actions.setSendAmount(e))} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 20
    },
    text: {
        fontSize: 17,
        color: black
    },
    inputView: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10
    },
    currency: {
        fontSize: 23,
        color: black,
        paddingRight: 10
    },
    input: {
        height: 45,
        flex: 1,
        backgroundColor: inputColor,
        borderRadius: 10,
        fontSize: 23,
        paddingLeft: 10
    }
})

export default AmountInput;