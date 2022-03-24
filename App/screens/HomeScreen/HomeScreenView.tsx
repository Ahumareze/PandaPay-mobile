import React, {FC, useEffect, useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';

//Imported Components
import { Header } from '../../components';
import { white } from '../../utils/colors';
import {width} from '../../utils/dimension';

import Balance from './components/Balance';
import Recieve from './components/Recieve/Recieve';
import QuickTransaction from './components/QuickTransaction/QuickTransaction';
import Transactions from './components/Transactions/Transactions';
import * as actions from '../../redux/actions';
import { useDispatch } from 'react-redux';

interface HomeViewProps{
    send: () => void,
    profile: () => void
}

const HomeScreenView:FC<HomeViewProps> = ({send, profile}):JSX.Element => {
    const dispatch = useDispatch();
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

    let view = (
        <>
            <Balance />
            <QuickTransaction onSend={() => onSend()} onRecieve={() => onRecieve()} />
            <Transactions />
        </>
    )
    if(openRecieve){
        view = <Recieve onClose={() => setOpenRecieve(false)} />
    }

    return (
        <View style={styles.container}>
            <Header navigate={() => profile()} />
            {view}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: white,
        paddingRight: 10,
        paddingLeft: 10,
        width: width
    }
})

export default HomeScreenView;
