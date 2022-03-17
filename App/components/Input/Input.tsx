import React, {FC} from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

interface InputProps{
    label: string,
    type: any,
    secure: boolean,
    onChange: (e: string) => void
}

const Input:FC<InputProps> = ({label, type, onChange, secure}):JSX.Element => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{label}</Text>
            <TextInput style={styles.input} keyboardType={type} secureTextEntry={secure} onChangeText={(e) => onChange(e) } />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 15
    },
    text: {
        fontSize: 18,
        color: '#000',
        letterSpacing: 1,
        paddingBottom: 7
    },
    input: {
        height: 40,
        width: '100%',
        backgroundColor: '#E2E2E2',
        borderRadius: 8,
        paddingLeft: 10,
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default Input;