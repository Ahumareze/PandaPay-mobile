import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

//Impoted utilities
import { black, red, white } from '../../../../utils/colors';
import { height, width } from '../../../../utils/dimension';
import {images} from '../../../../utils/images';

//Imported components
import NftItem from './NftItem';

function ChangeNft(props) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Change NFT</Text>
            </View>
            <View style={styles.nftContainer}>
                <NftItem />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: height - 73,
        width: width,
        backgroundColor: white,
        position: 'absolute',
        top: 0
    },
    header: {
        width: width,
        backgroundColor: white,
        paddingTop: 10,
        paddingBottom: 10
    },
    headerText: {
        color: black,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    nftContainer: {
        height: 400,
        width: width,
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})

export default ChangeNft;