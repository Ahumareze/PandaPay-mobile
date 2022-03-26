import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

//Imported components
import ProfileSettingItem from './ProfileSettingItem';

//Import utilities
import { black, depositColor, medBlack, notificationColor, red, withdrawColor } from '../../../../utils/colors';

function ProfileSettings(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <ProfileSettingItem icon='bank-outline' color={medBlack} name='Deposit' toggle={false} />
            <ProfileSettingItem icon='cash' color={withdrawColor} name='Withdraw' toggle={false} />
            <ProfileSettingItem icon='bell' color={notificationColor} name='Notification' toggle />
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