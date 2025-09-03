import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const DisplayAnImage = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Image source={require('./assets/local.jpg')} />
      <Image
        // style={styles.tinyLogo}
        style={{ width: 300, height: 150 }}
        source={{
          uri: 'https://img.freepik.com/foto-gratis/bunga-sakura-yang-indah_181624-668.jpg?semt=ais_hybrid&w=740&q=80',
        }}
      />
      <Image
        style={{ width: 300, height: 150, backgroundColor: 'red' }}
        source={{
          uri:
            'data:image/png;base64,' +
            'iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAMUlEQVQoU2NkYGBgYGBg+A8EDAwMDAwMjI2N/4EwCkbGxsYGhgYmRkZGBgYGBjZgQMAAGdcBAX9U3sQAAAAAElFTkSuQmCC',
        }}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

export default DisplayAnImage;
