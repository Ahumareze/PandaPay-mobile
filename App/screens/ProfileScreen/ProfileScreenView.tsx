import React, { useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

//Imported Components
import ProfilePic from './components/ProfilePic';
import {width, height} from '../../utils/dimension';
import { black, white } from '../../utils/colors';
import ProfileSettings from './components/ProfileSettings/ProfileSettings';
import AccountSettings from './components/AccountSettings/AccountSettings';
import { Loader } from '../../components';
import * as actions from '../../redux/actions';

import {images} from '../../utils/images';
import ChangeNft from './components/ChangeNft/ChangeNft';

const img = require('../../assets/cat2.png');

function ProfileScreenView(props) {
    const dispatch = useDispatch();
    const offlineData = useSelector((state: any) => state.mainReducer.offlineData);
    const changeNft = useSelector((state: any) => state.mainReducer.changeNft);
    const loading = useSelector((state: any) => state.mainReducer.loading);

    useEffect(() => {
        fetchOfflineData();
    }, []);

    const fetchOfflineData = () => {
        dispatch(actions.getOfflineData());
    }

    const openChangeNft = () => {
        dispatch(actions.changeNft(true))
    }

    const update = (nft: number) => {
        dispatch(actions.updateNft(nft, offlineData.id))
    }

    const view = (
        <>
            <ScrollView refreshControl={<RefreshControl refreshing={loading} onRefresh={() => fetchOfflineData()} />} >
                <View style={styles.container}>
                    <View style={styles.userProfileDetails}>
                        <ProfilePic img={images[offlineData.nft]} changeNft={() => openChangeNft()} />
                        <Text style={styles.username}>{offlineData.username}</Text>
                        <Text style={styles.email}>{offlineData.email}</Text>
                    </View>
                    <ProfileSettings />
                    <AccountSettings />
                </View>
            </ScrollView>
            {changeNft && 
                <ChangeNft 
                    activeNft={offlineData.nft} 
                    close={() => dispatch(actions.changeNft(false))} 
                    update={(nft) => update(nft)}
                />
            }
        </>
    )

    return (
        <>
            {!loading ? view : <Loader />}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: white,
        paddingBottom: 30,
        paddingRight: 10,
        paddingLeft: 10,
        width: width
    },
    userProfileDetails: {
        paddingTop: 30
    },
    username: {
        fontSize: 20,
        color: black,
        textAlign: 'center',
        paddingTop: 10
    },
    email: {
        fontSize: 18,
        color: black,
        textAlign: 'center',
        opacity: 0.7
    }
})

export default ProfileScreenView;