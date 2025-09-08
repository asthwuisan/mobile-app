import React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';

// Komponen utama
const Exercise3 = () => {
  return (
    <View style={styles.container}>
      {/* Foto Profil dari file lokal */}
      <Image source={require('./assets/fotoprofil.png')} style={styles.image} />

      {/* Biodata Sederhana */}
      <Text style={styles.name}>Asthried Tesalonika Wuisan</Text>
      <Text style={styles.info}>
        Tempat, Tanggal Lahir: Manado, 9 Maret 2003
      </Text>
      <Text style={styles.info}>Alamat: Watutumou III Blok O No 6</Text>
      <Text style={styles.info}>Email: asthriedwuisan09@gmail.com</Text>
      <Text style={styles.info}>Telepon: 085824845071 </Text>
      <Text style={styles.info}>Status: Mahasiswa</Text>
    </View>
  );
};

export default Exercise3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0a0ab3ff',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#333',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
});
