import React, {FC} from 'react';
import { View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

//Import utilities
import { darkGreen, withdrawColor } from '../../../utils/colors';

interface ProfilePicProps{
    img: any,
    changeNft: () => void
}

const ProfilePic:FC<ProfilePicProps> = ({img, changeNft}):JSX.Element => {
    return (
        <TouchableOpacity onPress={() => changeNft()}>
            <ImageBackground source={img} style={styles.container} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 120,
        width: 120,
        borderRadius: 60,
        backgroundColor: withdrawColor,
        marginRight: 'auto',
        marginLeft: 'auto',
        overflow: 'hidden',
    }
})

export default ProfilePic;