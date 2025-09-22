import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './components/Button';
import TextInput from './components/TextInput';
import Title from './components/Title';

const Exercise6 = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const onRegister = () => {
    console.log('Name:', name);
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('Phone:', phone);
  };

  return (
    <View style={styles.container}>
      <Title text="Registration" />

      <TextInput
        placeholder="Masukan nama lengkap anda"
        label="Name"
        onChangeText={event => setName(event)}
      />
      <TextInput
        placeholder="Masukan username anda"
        label="Username"
        onChangeText={event => setUsername(event)}
      />
      <TextInput
        placeholder="Masukan email anda"
        label="Email"
        keyboardType="email-address"
        onChangeText={event => setEmail(event)}
      />
      <TextInput
        placeholder="Masukan alamat anda"
        label="Address"
        onChangeText={event => setAddress(event)}
      />
      <TextInput
        placeholder="Masukan Nomor telepon anda"
        label="Phone Number"
        keyboardType="numeric"
        onChangeText={event => setPhone(event)}
      />

      <Button label="Register" onPress={onRegister} />
    </View>
  );
};

export default Exercise6;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    flex: 1,
  },
});
