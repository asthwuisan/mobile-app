import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 100,
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
        source={{
          uri: 'https://tse3.mm.bing.net/th/id/OIP.KLutQzmurWnk0bFujxyQkgHaFg?pid=Api&P=0&h=180',
        }}
      />
      <Image
        style={styles.logo}
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
