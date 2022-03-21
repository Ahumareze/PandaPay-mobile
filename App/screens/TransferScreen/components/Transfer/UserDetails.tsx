import React, {FC} from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { black } from '../../../../utils/colors';

const img = require('../../../../assets/cat1.png');

interface UserDetailsProps{
    username: string,
    email: string
}

const UserDetails:FC<UserDetailsProps> = ({username, email}):JSX.Element => {
    return (
        <View style={styles.container}>
            <ImageBackground source={img} style={styles.userPic}  />
            <View style={styles.detailsContainer}>
                <Text style={styles.username}>{username}</Text>
                <Text style={styles.email}>{email}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    userPic: {
        height: 60,
        width: 60,
        borderRadius: 30,
        overflow: 'hidden'
    },
    username: {
        fontSize: 20,
        color: black,
    },
    email: {
        fontSize: 18,
        color: black,
        opacity: 0.6
    },
    detailsContainer: {
        paddingLeft: 10
    }
})

export default UserDetails;