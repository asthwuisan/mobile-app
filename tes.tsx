import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Flexbox = () => {
  return (
    <>
      {/* Bagian Atas (Merah + kotak hitam-kuning-hitam) */}
      <View style={styles.topContainer}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>

      {/* Bagian Tengah (Logo + Text) */}
      <View style={styles.middleContainer}>
        <Image
          source={require('./assets/logo-with-motto-3')} // ganti dengan path logo Universitas Klabat
          style={styles.logo}
        />
        <Text style={styles.title}>Universitas Klabat</Text>
        <Text style={styles.subtitle}>Pathway to Excellence</Text>
      </View>

      {/* Bagian Bawah (Biru + kotak hitam-kuning-hitam) */}
      <View style={styles.bottomContainer}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>
    </>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'red',
    paddingVertical: 20,
  },
  middleContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'blue',
    paddingVertical: 20,
  },
  blackBox: {
    height: 60,
    width: 60,
    backgroundColor: 'black',
  },
  yellowBox: {
    height: 60,
    width: 60,
    backgroundColor: 'yellow',
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    fontStyle: 'italic',
    color: 'gray',
  },
});
