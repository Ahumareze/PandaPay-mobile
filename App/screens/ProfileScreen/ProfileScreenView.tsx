import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ProfilePic from './components/ProfilePic';

function ProfileScreenView(props) {
    return (
        <View>
            <View style={styles.userProfileDetails}>
                <ProfilePic />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    userProfileDetails: {
        
    }
})

export default ProfileScreenView;