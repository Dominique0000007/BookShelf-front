// src/screens/HomePage.js
import React from 'react';
import { FlatList, ScrollView, Text, View, StyleSheet } from 'react-native';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import BookCard from '../Components/BookCard';
import { booksData } from '../Utils/data';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Text style={styles.sectionTitle}>O que há de novo</Text>
        <FlatList
          horizontal
          data={booksData.newArrivals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <BookCard book={item} />}
        />
        <Text style={styles.sectionTitle}>Recomendados</Text>
        <FlatList
          horizontal
          data={booksData.recommended}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <BookCard book={item} />}
        />
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF5E6',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    marginLeft: 20,
  },
});

export default HomePage;