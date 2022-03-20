import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

//Imported Components
import ProfilePic from './components/ProfilePic';
import {width, height} from '../../utils/dimension';
import { black } from '../../utils/colors';
import ProfileSettings from './components/ProfileSettings/ProfileSettings';

const img = require('../../assets/cat2.png');

function ProfileScreenView(props) {
    return (
        <View style={styles.container}>
            <View style={styles.userProfileDetails}>
                <ProfilePic img={img} />
                <Text style={styles.username}>Fvture_the_creatvr</Text>
                <Text style={styles.email}>futurethecreator@gmail.com</Text>
            </View>
            <ProfileSettings />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width - 20,
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    userProfileDetails: {
        paddingTop: 30
    },
    username: {
        fontSize: 23,
        color: black,
        textAlign: 'center',
        paddingTop: 10
    },
    email: {
        fontSize: 20,
        color: black,
        textAlign: 'center',
        opacity: 0.7
    }
})

export default ProfileScreenView;