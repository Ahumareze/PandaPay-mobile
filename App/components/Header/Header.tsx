import React, {FC, useEffect} from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Logo from '../Logo/Logo';


import { useDispatch, useSelector } from 'react-redux';

import {images} from '../../utils/images';
import * as actions from '../../redux/actions';
import { white, withdrawColor } from '../../utils/colors';

interface HeaderProps{
    navigate: () => void
}

const Header:FC<HeaderProps> = ({navigate}):JSX.Element => {
    const dispatch = useDispatch();
    const offlineData = useSelector((state: any) => state.mainReducer.offlineData);

    useEffect(() => {
        dispatch(actions.getOfflineData());
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.V1}>
                <Logo />
            </View>
            <View style={styles.V2}>
                <TouchableOpacity onPress={() => navigate()}>
                    <ImageBackground source={images[offlineData.nft]} style={styles.userImg} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: white,
        paddingTop: 7,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    V1: {
        width: '50%'
    },
    V2: {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-end',
    },
    userImg: {
        height: 30,
        width: 30,
        borderRadius: 20,
        backgroundColor: withdrawColor,
        overflow: 'hidden'
    }
})

export default Header;