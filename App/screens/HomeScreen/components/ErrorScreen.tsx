import React, {FC} from 'react';
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';

//Imported utilities
import { black, white } from '../../../utils/colors';
import { height, width } from '../../../utils/dimension';

//Imported Components
import Icon from 'react-native-vector-icons/Feather';

interface ErrorScreenProps{
    loading: boolean,
    reload: () => void
}

const ErrorScreen:FC<ErrorScreenProps> = ({loading, reload}):JSX.Element => {
    return (
        <ScrollView style={styles.container} refreshControl={ <RefreshControl refreshing={loading} onRefresh={() => reload()} />}>
            <View style={styles.viewContainer}>
                <Icon name='wifi-off' size={35} color={black} style={styles.icon} />
                <Text style={styles.boldText} >Network Error</Text>
                <Text style={styles.extraStyle}>Pull down to reload</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        backgroundColor: white
    },
    viewContainer: {
        paddingTop: 100,
        textAlign: 'center',
    },
    icon: {
        textAlign: 'center'
    },
    boldText: {
        fontSize: 20,
        color: black,
        textAlign: 'center',
        paddingTop: 5
    },
    extraStyle: {
        color: black,
        opacity: 0.5,
        fontSize: 20,
        textAlign: 'center'
    }
})

export default ErrorScreen;