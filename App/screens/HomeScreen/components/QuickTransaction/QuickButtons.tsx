import React, {FC} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {sendButton, recieveButton} from '../../../../utils/colors';

interface QuickButtonsProps{
    type: string
}

const QuickButtons:FC<QuickButtonsProps> = ({type}):JSX.Element => {
    let div;
    if(type == 'send'){
        div = (
            <View style={styles.container}>
                
            </View>
        )
    }else if(type == 'recieve'){
        div = (
            <View style={styles.container2}>

            </View>
        )
    }

    return div
};

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 100,
        backgroundColor: sendButton,
        borderRadius: 15
    },
    container2: {
        height: 100,
        width: 100,
        backgroundColor: recieveButton,
        borderRadius: 15
    }
})

export default QuickButtons;