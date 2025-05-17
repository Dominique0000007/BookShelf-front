// src/screens/SearchPage.js
import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import BookCard from '../Components/BookCard';
import { booksData } from '../Utils/data';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredBooks = booksData.allBooks.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Pesquisar livro..."
          value={searchTerm}
          onChangeText={setSearchTerm}
          style={styles.searchInput}
        />
      </View>
      <FlatList
        data={filteredBooks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <BookCard book={item} />}
      />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF5E6',
  },
  searchContainer: {
    margin: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#8B0000',
    padding: 10,
    borderRadius: 5,
  },
});

export default SearchPage;