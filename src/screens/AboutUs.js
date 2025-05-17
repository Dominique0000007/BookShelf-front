// src/screens/AboutUs.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const AboutUs = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Sobre nós</Text>
        <Text style={styles.description}>
          A Biblioteca BookShelf foi fundada em 2020 com o objetivo de promover o acesso à leitura e o amor pelos livros. Localizada no coração da cidade, oferecemos uma vasta coleção de obras literárias para todos os gostos.
        </Text>
        <Image
          source={require('../../assets/library-image.jpg')}
          style={styles.image}
        />
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF5E6',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginTop: 20,
  },
});

export default AboutUs;