import React, {FC} from 'react';
import { View, StyleSheet, Text, TouchableHighlight, TouchableOpacity } from 'react-native';

//Imported utilities
import { darkGreen } from '../../../utils/colors';

interface ExtraTextProps{
    text: string,
    page: string,
    onClick: () => void
}

const ExtraText:FC<ExtraTextProps> = ({text, page, onClick}):JSX.Element => {
    return (
        <TouchableOpacity onPress={() => onClick()} >
            <View style={styles.container}>
                <Text style={styles.text}>{text}</Text>
                <Text style={[styles.text, styles.page]}> {page}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingTop: 30
    },
    text: {
        fontSize: 17,
        fontWeight: '400',
        color: '#000',
    },
    page: {
        fontWeight: 'bold',
        color: darkGreen
    }
})

export default ExtraText;