/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';

import LottieView from 'lottie-react-native';

import loader from '../../assets/others/spinner.json';

const {height, width} = Dimensions.get('window');

const Loader = () => {
  return (
    <View style={styles.container}>
      <LottieView source={loader} autoPlay loop />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height - 100,
    width: width,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
  },
});

export default Loader;
