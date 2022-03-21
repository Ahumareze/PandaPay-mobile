import React, {FC} from 'react';

//Imported Components
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {sendButton, recieveButton, white, black} from '../../../../utils/colors';

//Imported Icons
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';

interface QuickButtonsProps{
    type: string,
    onClick: () => void
}

const QuickButtons:FC<QuickButtonsProps> = ({type, onClick}):JSX.Element => {

    let div;
    if(type == 'send'){
        div = (
            <View style={styles.container}>
                <View>
                    <View style={styles.IconContainer}>
                        <Icon1 name="ios-send" size={25} color={black} />
                    </View>
                    <Text style={styles.text}>Send</Text>
                </View>
            </View>
        )
    }else if(type == 'recieve'){
        div = (
            <View style={styles.container2}>
                <View>
                    <View style={styles.IconContainer2}>
                        <Icon2 name="qrcode" size={25} color={black} />
                    </View>
                    <Text style={[styles.text, styles.text2]}>Recieve</Text>
                </View>
            </View>
        )
    }

    return(
        <TouchableOpacity onPress={() => onClick()}>
            {div}
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 100,
        backgroundColor: sendButton,
        borderRadius: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center'
    },
    container2: {
        height: 100,
        width: 100,
        backgroundColor: recieveButton,
        borderRadius: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center'
    },
    IconContainer: {
        height: 45,
        width: 45,
        backgroundColor: white,
        borderRadius: 23,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform:  [{ rotate: '-30deg' }],
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    IconContainer2: {
        height: 45,
        width: 45,
        backgroundColor: white,
        borderRadius: 23,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    text: {
        fontSize: 18,
        color: white,
        paddingTop: 5,
        textAlign: 'center'
    },
    text2: {
        color: black
    }
})

export default QuickButtons;