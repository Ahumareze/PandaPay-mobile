import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { black, darkerGreen } from '../../../../utils/colors';

function NftItem(props) {
    return (
        <View style={styles.container}>
            <View style={styles.mainNft}></View>
            <Text style={styles.name}>Regular Joe</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 8,
        paddingTop: 8,
        width: '50%',
        borderWidth: 1
    },
    mainNft: {
        height: 140,
        width: '80%',
        backgroundColor: darkerGreen,
        borderRadius: 15,
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    name: {
        paddingTop: 10,
        fontSize: 18,
        color: black,
        textAlign: 'center'
    }
})

export default NftItem;