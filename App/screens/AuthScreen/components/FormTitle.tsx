import React from 'react';
import { Text, View , StyleSheet} from 'react-native';

//Imported utilities
import { black, darkGreen } from '../../../utils/colors';

function FormTitle(props) {
    return (
        <View>
            <Text style={styles.mainText}>Sign up</Text>
            <View style={styles.mainline} />
        </View>
    );
}

const styles = StyleSheet.create({
    mainText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: black
    },
    mainline: {
        height: 3,
        width: 90,
        backgroundColor: darkGreen,
        borderRadius: 2,
        marginTop: 7
    }
})

export default FormTitle;