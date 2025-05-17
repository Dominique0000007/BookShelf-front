import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './screens/HomePage';
import SearchPage from './screens/SearchPage';
import AboutUs from './screens/AboutUs';
import BookDetails from './screens/BookDetails';
import SavedBooks from './screens/SavedBooks';
import Concept2Details from './screens/Concept2Details';
import './Global.css';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="SearchPage" component={SearchPage} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="BookDetails" component={BookDetails} />
        <Stack.Screen name="SavedBooks" component={SavedBooks} />
        <Stack.Screen name="Concept2Details" component={Concept2Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}