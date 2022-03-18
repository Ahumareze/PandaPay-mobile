import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header } from '../../components';
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
        width: width - 20,
        marginRight: 'auto',
        marginLeft: 'auto'
    }
})

export default HomeScreenView;