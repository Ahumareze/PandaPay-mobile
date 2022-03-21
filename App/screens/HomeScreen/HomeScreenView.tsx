import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header } from '../../components';
import { white } from '../../utils/colors';
import {width} from '../../utils/dimension';
import Balance from './components/Balance';
import QuickTransaction from './components/QuickTransaction/QuickTransaction';
import Transactions from './components/Transactions/Transactions';

function HomeScreenView(props) {
    return (
        <View style={styles.container}>
            <Header />
            <Balance />
            <QuickTransaction />
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