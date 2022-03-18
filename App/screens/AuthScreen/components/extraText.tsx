import React, {FC} from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface ExtraTextProps{
    text: string,
    page: string,
    onClick: () => void
}

const extraText:FC<ExtraTextProps> = ({text, page, onClick}):JSX.Element => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            <Text style={[styles.text, styles.page]}>{}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
    text: {
        fontSize: 17,
        fontWeight: '400'
    },
    page: {
        fontWeight: 'bold',
    }
})

export default extraText;