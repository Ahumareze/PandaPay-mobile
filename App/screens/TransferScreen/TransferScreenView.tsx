import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { black, white } from '../../utils/colors';

//Imported Compoents
import Main from './components/Main';
import { height, width } from '../../utils/dimension';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

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
            <Text>Reciever</Text>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>New Transaction</Text>
            {!loading ? view : <Text>Loading</Text> }
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