import React, { useState, FC } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

//Impoted utilities
import { black, red, white } from '../../../../utils/colors';
import { height, width } from '../../../../utils/dimension';

import {images} from '../../../../utils/images';

//Imported components
import NftItem from './NftItem';
import {Button} from '../../../../components';

interface ChangeNftProps{
    activeNft: number
}

const ChangeNft:FC<ChangeNftProps> = ({activeNft}):JSX.Element => {
    const [selected, setSelected] = useState<number>(activeNft);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Change NFT</Text>
            </View>
            <ScrollView>
                <View style={styles.nftContainer}>
                    <NftItem nft={0} name='Regular Joe' active={selected} onSelect={() => setSelected(0)} />
                    <NftItem nft={1} name='Tiger Woods' active={selected} onSelect={() => setSelected(0)} />
                    <NftItem nft={2} name='General P' active={selected} onSelect={() => setSelected(0)} />
                    <NftItem nft={3} name='Ceaser' active={selected} onSelect={() => setSelected(0)} />
                    <NftItem nft={4} name='Grin Lord' active={selected} onSelect={() => setSelected(0)} />
                    <NftItem nft={5} name='Cool Joe' active={selected} onSelect={() => setSelected(0)} />
                    <NftItem nft={6} name='Captain' active={selected} onSelect={() => setSelected(0)} />
                    <NftItem nft={7} name='Pharaoh' active={selected} onSelect={() => setSelected(0)} />
                    <NftItem nft={8} name='Kvng' active={selected} onSelect={() => setSelected(0)} />
                    <NftItem nft={9} name='Saudi Prince' active={selected} onSelect={() => setSelected(0)} />
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <Button title='Update' onClick={() => console.log('')} />
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
        width: width,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingBottom: 100
    },
    buttonContainer: {
        width: width,
        // backgroundColor: white,
        position: 'absolute',
        bottom: 0,
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 10,
        paddingBottom: 10
    }
})

export default ChangeNft;