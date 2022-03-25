import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import { useDispatch } from 'react-redux';
import { Button } from '../../../components';

import { black, darkerGreen, white } from '../../../utils/colors';
import { height, width } from '../../../utils/dimension';
import * as actions from '../../../redux/actions';

function SuccessScreen(props) {
    const dispatch = useDispatch();

    const onClose = () => {
        dispatch(actions.setSuccessScreen(false))
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <Icon name='checkcircleo' color={darkerGreen} size={40} style={styles.icon} />
                <Text style={styles.text}>Transfer Successful</Text>
                <View style={styles.btnContainer}>
                    <Button title='Close' onClick={() => onClose()} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        position: 'absolute',
        top: 0,
        backgroundColor: white
    },
    mainContainer: {
        paddingTop: 100
    },
    icon: {
        textAlign: 'center'
    },
    text: {
        color: black,
        fontSize: 23,
        paddingTop: 15,
        textAlign: 'center'
    },
    btnContainer: {
        width: 150,
        paddingTop: 30,
        marginRight: 'auto',
        marginLeft: 'auto'
    }
});

export default SuccessScreen;