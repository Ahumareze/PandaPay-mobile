import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { red, white } from '../../utils/colors';

interface CancleButtonProps{
    title: string,
    onClick: () => void
}


const CancleButton:FC<CancleButtonProps> = ({title, onClick}):JSX.Element => {
    return (
        <TouchableOpacity onPress={() => onClick()}>
            <View style={styles.container} >
                <Text style={styles.title}>{title}</Text>
            </View>
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
        marginTop: 0,
        backgroundColor: white,
        borderWidth: 2,
        borderColor: red
    },
    title:{
        fontSize: 20,
        color: red
    }
})
export default CancleButton;