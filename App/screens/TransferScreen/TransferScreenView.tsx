import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { black, white } from '../../utils/colors';

//Imported Compoents
import Main from './components/Main';
import Transfer from './components/Transfer';

import { Loader } from '../../components';

import { height, width } from '../../utils/dimension';

function TransferScreenView(props) {
    const reciever = useSelector((state: any) => state.mainReducer.reciever);
    const loading = useSelector((state: any) => state.mainReducer.loading);

    useEffect(() => {
        console.log(reciever)
    }, [reciever]);

    let view = (
        <Main />
    )
    if(reciever){
        view = (
            <Transfer />
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>New Transaction</Text>
            {!loading ? view : <Loader />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: white,
        paddingBottom: 30,
        paddingRight: 10,
        paddingLeft: 10,
        width: width,
        height: height
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: black,
        textAlign: 'center'
    }
})

export default TransferScreenView;