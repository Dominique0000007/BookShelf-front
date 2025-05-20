import React from 'react';
import { View, Text, Image, Platform } from 'react-native';
import tw from 'twrnc';

const BookCard = ({ title, authors, thumbnail }) => (
  <View style={tw`flex-row p-4 mb-4 bg-white rounded-lg shadow ${Platform.OS === 'web' ? 'max-w-2xl' : ''}`}>
    {thumbnail && <Image source={{ uri: thumbnail }} style={tw`w-16 h-24 mr-4`} />}
    <View>
      <Text style={tw`text-lg font-bold`}>{title}</Text>
      <Text style={tw`text-gray-600`}>{authors || 'Autor desconhecido'}</Text>
    </View>
  </View>
);

export default BookCard;