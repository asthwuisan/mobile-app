import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Exercise7 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>

      <View style={styles.containerMiddle}>
        <Image
          source={require('./assets/logo-with-motto-3.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.containerBottom}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>
    </View>
  );
};

export default Exercise7;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  containerTop: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'red',
    paddingLeft: 20,
  },

  containerMiddle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 400,
    height: 250,
    resizeMode: 'contain',
  },

  containerBottom: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'blue',
  },

  blackBox: {
    width: 60,
    height: 60,
    backgroundColor: 'black',
    marginHorizontal: 10,
  },
  yellowBox: {
    width: 60,
    height: 60,
    backgroundColor: 'yellow',
    marginHorizontal: 10,
  },
});
