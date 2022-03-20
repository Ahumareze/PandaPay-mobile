import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { black, depositColor, red } from '../../../../utils/colors';
import ProfileSettingItem from './ProfileSettingItem';

function ProfileSettings(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <ProfileSettingItem color={depositColor} name='Deposit' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 30
    },
    title: {
        color: '#000',
        fontSize: 17
    }
})

export default ProfileSettings;