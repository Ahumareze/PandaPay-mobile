import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { white } from '../../utils/colors';
import { height, width } from '../../utils/dimension';

function StoreScreenView(props) {
    return (
        <View style={styles.container}>
            <Text>No store availiable</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        backgroundColor: white
    }
})

export default StoreScreenView;