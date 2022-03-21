import React, {FC} from 'react';
import { Text, View, StyleSheet } from 'react-native';

//Imported Components
import { Header } from '../../components';
import { white } from '../../utils/colors';
import {width} from '../../utils/dimension';
import Balance from './components/Balance';
import QuickTransaction from './components/QuickTransaction/QuickTransaction';
import Transactions from './components/Transactions/Transactions';

interface HomeViewProps{
    navigate: () => void
}

const HomeScreenView:FC<HomeViewProps> = ({navigate}):JSX.Element => {

    const onSend = () => {
        navigate()
    };

    const onRecieve = () => {
        console.log('recieve')
    }

    return (
        <View style={styles.container}>
            <Header />
            <Balance />
            <QuickTransaction onSend={() => onSend()} onRecieve={() => onRecieve()} />
            <Transactions />
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