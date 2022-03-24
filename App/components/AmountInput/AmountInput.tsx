import React, {FC} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { black, inputColor, red } from '../../utils/colors';

interface AmountInputProps{
    title: string,
    amount: any,
    onChange:(e: string) => void
}

const AmountInput:FC<AmountInputProps> = ({title, onChange, amount}):JSX.Element => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}:</Text>
            <View style={styles.inputView}>
                <Text style={styles.currency}>$</Text>
                <TextInput defaultValue={amount} style={styles.input} keyboardType={'numeric'} onChangeText={(e) => onChange(e)} />
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