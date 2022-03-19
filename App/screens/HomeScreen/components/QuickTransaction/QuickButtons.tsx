import React, {FC} from 'react';

//Imported Components
import { View, Text, StyleSheet } from 'react-native';
import {sendButton, recieveButton} from '../../../../utils/colors';
import Icons2 from 'react-native-vector-icons/Feather';

interface QuickButtonsProps{
    type: string
}

const QuickButtons:FC<QuickButtonsProps> = ({type}):JSX.Element => {

    const myIcon = <Icons2 name="search" size={30} color={'#fff'} />
    let div;
    if(type == 'send'){
        div = (
            <View style={styles.container}>
                <Icons2 name="linkedin" size={30} color={'#fff'} />
                <Text>Send</Text>
            </View>
        )
    }else if(type == 'recieve'){
        div = (
            <View style={styles.container2}>
                <Icons2 name="search" size={30} color={'#fff'} />
                <Text>Recieve</Text>
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