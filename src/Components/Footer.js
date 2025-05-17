// src/components/Footer.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Image
        source={require('../../assets/home-icon.png')}
        style={styles.icon}
      />
      <Image
        source={require('../../assets/cart-icon.png')}
        style={styles.icon}
      />
      <Image
        source={require('../../assets/profile-icon.png')}
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#8B0000',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default Footer;