import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

//Imported utilities
import { useDispatch } from 'react-redux';
import { darkerGreen, red } from '../../../../utils/colors';
import * as actions from '../../../../redux/actions';

function AccountSettings(props) {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(actions.logout())
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Account</Text>
            <View>
                <TouchableOpacity onPress={() => logout()}>
                    <Text style={styles.switchAccount}>Switch to other account</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => logout()} >
                    <Text style={styles.logOut}>Log out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 30
    },
    title: {
        color: '#000',
        fontSize: 17,
        paddingBottom: 10
    },
    switchAccount: {
        fontSize: 18,
        color: darkerGreen,
        paddingTop: 10
    },
    logOut: {
        fontSize: 18,
        color: red,
        paddingTop: 10
    }
})

export default AccountSettings;