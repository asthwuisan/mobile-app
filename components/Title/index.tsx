import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Title = ({ text = 'Registration' }) => {
  return <Text style={styles.title}>{text}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 40,
  },
});
