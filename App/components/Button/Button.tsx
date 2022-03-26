import React, {FC} from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {lightGreen, darkGreen, darkerGreen, white} from '../../utils/colors';

interface ButtonProps{
    title: string,
    onClick: () => void
}

const Button:FC<ButtonProps> = ({title, onClick}):JSX.Element => {
    return (
        <TouchableOpacity onPress={() => onClick()}>
            <LinearGradient style={styles.container} colors={[darkGreen, darkerGreen]} start={{x: 0, y: 0}} end={{x: 1, y: 0}} >
                <Text style={styles.title}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 45,
        width: '100%',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0
    },
    title:{
        fontSize: 20,
        color: white
    }
})

export default Button;