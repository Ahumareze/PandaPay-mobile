import React from 'react';
import { StyleSheet, View } from 'react-native';
import { red } from '../../../../utils/colors';
import { height, width } from '../../../../utils/dimension';
import UserDetails from './UserDetails';

function Transfer(props) {
    return (
        <View style={styles.container}>
            <UserDetails />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30
    }
})

export default Transfer;