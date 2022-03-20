import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

//Imported Components
import ProfilePic from './components/ProfilePic';
import {width, height} from '../../utils/dimension';

const img = require('../../assets/cat2.png');

function ProfileScreenView(props) {
    return (
        <View style={styles.container}>
            <View style={styles.userProfileDetails}>
                <ProfilePic img={img} />
            </View>
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
    }
})

export default ProfileScreenView;