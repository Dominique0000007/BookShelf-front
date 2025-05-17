// src/components/BookCard.js
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const BookCard = ({ book }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: book.image }} style={styles.image} />
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.author}>{book.author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FDF5E6',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  image: {
    width: 100,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  author: {
    fontSize: 14,
    color: '#8B0000',
  },
});

export default BookCard;