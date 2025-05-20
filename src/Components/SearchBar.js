import React, { useState } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Text, Platform } from 'react-native';
import axios from 'axios';
import tw from 'twrnc';
import BookCard from '../components/BookCard';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const searchBooks = async () => {
    const apiKey = 'NOVA_CHAVE_API'; // Replace with your new API key
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`;
    try {
      const response = await axios.get(url);
      setBooks(response.data.items || []);
    } catch (error) {
      console.error('Erro ao buscar livros:', error);
    }
  };

  return (
    <View style={tw`p-4 bg-gray-100 h-full ${Platform.OS === 'web' ? 'max-w-4xl mx-auto' : ''}`}>
      <TextInput
        placeholder="Buscar livros..."
        value={query}
        onChangeText={setQuery}
        style={tw`border border-gray-300 p-2 mb-4 rounded-lg ${Platform.OS === 'web' ? 'w-full' : 'w-100%'}`}
      />
      <TouchableOpacity
        onPress={searchBooks}
        style={tw`bg-blue-500 p-3 rounded-lg mb-4`}
      >
        <Text style={tw`text-white text-center`}>Pesquisar</Text>
      </TouchableOpacity>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BookCard
            title={item.volumeInfo.title}
            authors={item.volumeInfo.authors?.join(', ')}
            thumbnail={item.volumeInfo.imageLinks?.thumbnail}
          />
        )}
      />
    </View>
  );
};

export default SearchPage;