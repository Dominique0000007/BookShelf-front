// src/components/Header.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require('../../assets/bookshelf-logo.png')}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#8B0000',
    padding: 10,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 30,
  },
});

export default Header;