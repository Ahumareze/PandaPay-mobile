import React, { useState, FC } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

//Imported components
import NftItem from './NftItem';
import {Button, CancleButton} from '../../../../components';

//Impoted utilities
import { black, red, white } from '../../../../utils/colors';
import { height, width } from '../../../../utils/dimension';

interface ChangeNftProps{
    activeNft: number,
    close: () => void,
    update: (e: number) => void
}

const ChangeNft:FC<ChangeNftProps> = ({activeNft, close, update}):JSX.Element => {
    const [selected, setSelected] = useState<number>(activeNft);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Change NFT</Text>
            </View>
            <ScrollView>
                <View style={styles.nftContainer}>
                    <NftItem nft={0} name='Regular Joe' active={selected} onSelect={() => setSelected(0)} />
                    <NftItem nft={1} name='Tiger Woods' active={selected} onSelect={() => setSelected(1)} />
                    <NftItem nft={2} name='General P' active={selected} onSelect={() => setSelected(2)} />
                    <NftItem nft={3} name='Ceaser' active={selected} onSelect={() => setSelected(3)} />
                    <NftItem nft={4} name='Grin Lord' active={selected} onSelect={() => setSelected(4)} />
                    <NftItem nft={5} name='Cool Joe' active={selected} onSelect={() => setSelected(5)} />
                    <NftItem nft={6} name='Captain' active={selected} onSelect={() => setSelected(6)} />
                    <NftItem nft={7} name='Pharaoh' active={selected} onSelect={() => setSelected(7)} />
                    <NftItem nft={8} name='Kvng' active={selected} onSelect={() => setSelected(8)} />
                    <NftItem nft={9} name='Saudi Prince' active={selected} onSelect={() => setSelected(9)} />
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonContainers}>
                    <CancleButton title='Cancle' onClick={() => close()} />
                </View>
                <View style={styles.buttonContainers}>
                    <Button title='Update' onClick={() => update(selected)} />
                </View>
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
        backgroundColor: white,
        position: 'absolute',
        bottom: 0,
        paddingTop: 10,
        paddingBottom: 10,
        display: 'flex',
        flexDirection: 'row'
    },
    buttonContainers: {
        width: '50%',
        paddingLeft: 20,
        paddingRight: 20
    }
})

export default ChangeNft;