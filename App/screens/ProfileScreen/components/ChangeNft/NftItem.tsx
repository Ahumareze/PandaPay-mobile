import React, {FC} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { black, darkerGreen, lightGreen, red } from '../../../../utils/colors';

import {images} from '../../../../utils/images';

interface NftIemProps{
    nft: number,
    name: string,
    active: number,
    onSelect: () => void
}

const NftItem:FC<NftIemProps> = ({nft, name, active, onSelect}):JSX.Element => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => onSelect()} >
            <Image source={images[nft]} style={active !== nft ? styles.mainNft :styles.activeNft } />
            <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 8,
        paddingTop: 8,
        width: '50%',
    },
    mainNft: {
        height: 140,
        width: '80%',
        backgroundColor: darkerGreen,
        borderRadius: 15,
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    activeNft: {
        height: 140,
        width: '80%',
        backgroundColor: darkerGreen,
        borderRadius: 15,
        marginRight: 'auto',
        marginLeft: 'auto',
        borderWidth: 2,
        borderColor: lightGreen
    },
    name: {
        paddingTop: 10,
        fontSize: 18,
        color: black,
        textAlign: 'center'
    }
})

export default NftItem;