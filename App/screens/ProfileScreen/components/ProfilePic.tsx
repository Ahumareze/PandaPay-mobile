import React, {FC} from 'react';
import { View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { darkGreen } from '../../../utils/colors';

interface ProfilePicProps{
    img: any
}

const ProfilePic:FC<ProfilePicProps> = ({img}):JSX.Element => {
    return (
        <TouchableOpacity>
            <ImageBackground source={img} style={styles.container} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 120,
        width: 120,
        borderRadius: 60,
        backgroundColor: darkGreen,
        marginRight: 'auto',
        marginLeft: 'auto',
        overflow: 'hidden',
    }
})

export default ProfilePic;