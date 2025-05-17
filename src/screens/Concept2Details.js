// src/screens/Concept2Details.js
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Concept2Details = ({ route }) => {
  const { book } = route.params;

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Image source={{ uri: book.image }} style={styles.image} />
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>Autor: {book.author}</Text>
        <Text style={styles.price}>Preço: R$ {book.price.toFixed(2)}</Text>
        <Text style={styles.description}>{book.description}</Text>
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
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  author: {
    fontSize: 16,
    color: '#8B0000',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default Concept2Details;