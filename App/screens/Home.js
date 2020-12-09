import React from 'react';
import { StatusBar, View, StyleSheet, Image } from 'react-native';

// StatusBar is clock, wifi and battery symbols. They are prebuilt dark and light

import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
  },
  logoContainer:{

  },
  logoBackground: {

  },
  logo: {

  }
})

export default () => {
  return (
    <View style={styles.container}>
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