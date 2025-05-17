// src/components/SearchBar.js
import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleSearch = (text) => {
    setTerm(text);
    onSearch(text);
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="Pesquisar livro..."
        value={term}
        onChangeText={handleSearch}
        style={styles.searchInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default SearchBar;