import React from 'react';
import { StatusBar, View, StyleSheet, Image, Dimensions } from 'react-native';

// StatusBar is the clock, wifi and battery symbols. They are prebuilt dark and light

import colors from '../constants/colors';

const dims = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logoBackground: {
    width: dims.width / 0.45,
    height: dims.width * 0.45,
  },
  logo: {
    position: 'absolute',
    width: dims.width * 0.25,
    height: dims.width * 0.25,
  },
});

export default () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/background.png')}
          style={styles.logoBackground}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    </View>
  )
};