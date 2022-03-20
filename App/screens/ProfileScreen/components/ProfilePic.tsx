import React from 'react';
import { View, StyleSheet } from 'react-native';
import { darkGreen } from '../../../utils/colors';

function ProfilePic(props) {
    return (
        <View style={styles.container}>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 120,
        width: 120,
        borderRadius: 60,
        backgroundColor: darkGreen
    }
})

export default ProfilePic;