import React, {FC} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QuickButtons from './QuickButtons';

interface QuickTransactionProps{
    onSend: () => void,
    onRecieve: () => void
}

const QuickTransaction:FC<QuickTransactionProps> = ({onSend, onRecieve}):JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.v1}>
                <QuickButtons type='send' onClick={() => onSend()} />
            </View>
            <View style={styles.v2}>
                <QuickButtons type='recieve' onClick={() => onRecieve()} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 130,
        width: '100%',
        display: 'flex',
        flexDirection: 'row'
    },
    v1: {
        height: 130,
        width: '50%',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 20
    },
    v2: {
        height: 130,
        width: '50%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 20
    }
})

export default QuickTransaction;