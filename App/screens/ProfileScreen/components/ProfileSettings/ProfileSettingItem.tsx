import React, {FC} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Switch } from 'react-native';

//Imported Components
import { black, medBlack, red, white } from '../../../../utils/colors';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

interface ProfileSettingItemProps{
    icon: string,
    color: string,
    name: string,
    toggle: boolean
}

const ProfileSettingItem:FC<ProfileSettingItemProps> = ({icon, color, name, toggle}):JSX.Element => {

    let extraIcon;
    if(toggle){
        extraIcon = (
            <Switch />
        )
    }else{
        extraIcon = (
            <Icon name='chevron-right' color='#000' size={25} style={styles.extraIcon} />
        )
    }
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={[styles.icon, {backgroundColor: color}]}>
                    <Icon2 name={icon} color={white} size={15} />
                </View>
                <Text style={styles.text}>{name}</Text>
                <View style={styles.extra}>
                    {extraIcon}
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 35,
        width: '100%',
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row'
    },
    icon: {
        height: 35,
        width: 35,
        borderRadius: 20,
        marginTop: 'auto',
        marginBottom: 'auto',
        backgroundColor: medBlack,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 18,
        color: black,
        marginTop: 'auto',
        marginBottom: 'auto',
        paddingLeft: 15,
        flex: 1
    },
    extra: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    extraIcon: {
        opacity: 0.6
    }
})

export default ProfileSettingItem;