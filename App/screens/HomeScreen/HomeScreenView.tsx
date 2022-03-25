import React, {FC, useEffect, useState} from 'react';
import { Text, View, StyleSheet, ScrollView, RefreshControl } from 'react-native';

//Imported Components
import { Header, Loader } from '../../components';
import { white } from '../../utils/colors';
import {height, width} from '../../utils/dimension';

import Balance from './components/Balance';
import Recieve from './components/Recieve/Recieve';
import QuickTransaction from './components/QuickTransaction/QuickTransaction';
import Transactions from './components/Transactions/Transactions';
import ErrorScreen from './components/ErrorScreen';
import * as actions from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

interface HomeViewProps{
    send: () => void,
    profile: () => void
}

const HomeScreenView:FC<HomeViewProps> = ({send, profile}):JSX.Element => {
    const dispatch = useDispatch();
    const loading = useSelector((state: any) => state.mainReducer.loading);
    const errorScreen = useSelector((state: any) => state.mainReducer.errorScreen);
    const userData = useSelector((state: any) => state.mainReducer.userData);
    const [openRecieve, setOpenRecieve] = useState<boolean>(false);

    useEffect(() => {
        dispatch(actions.getUserData())
    }, [])

    const onSend = () => {
        send()
    };

    const onRecieve = () => {
        setOpenRecieve(true)
    }

    const onRefresh = () => {
        dispatch(actions.getUserData())
    }

    let view = (
        <ScrollView  style={styles.container} refreshControl={ <RefreshControl refreshing={loading} onRefresh={() => onRefresh()} /> }>
            <Balance balance={userData.balance} />
            <QuickTransaction onSend={() => onSend()} onRecieve={() => onRecieve()} />
            <Transactions history={userData.history} />
        </ScrollView>
    )
    if(openRecieve){
        view = <Recieve onClose={() => setOpenRecieve(false)} />
    }else if(errorScreen){
        view = <ErrorScreen loading={loading} reload={() => onRefresh()} />
    }

    return (
        <View style={{paddingBottom: 100}}>
            <Header navigate={() => profile()} />
            {!loading ? view : <Loader />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: white,
        paddingRight: 10,
        paddingLeft: 10,
        width: width,
        height: height - 100
    }
})

export default HomeScreenView;
