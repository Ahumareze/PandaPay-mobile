import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AmountInput from '../../../../components/AmountInput/AmountInput';
import { height } from '../../../../utils/dimension';

function Recieve(props) {
    return (
        <View style={styles.container}>
            <Text>Recieve screen</Text>
            <AmountInput title='Enter amount' onChange={(e) => console.log(e)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: height,
        width: '100%',
        paddingRight: 10,
        paddingLeft: 10
    }
})

export default Recieve;