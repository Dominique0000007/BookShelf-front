import React from 'react';
import HomePage from '@screens/HomePage';
import SearchPage from '@screens/SearchPage';
import AboutUs from '@screens/AboutUs';
import BookDetails from '@screens/BookDetails';
import SavedBooks from '@screens/SavedBooks';
import Concept2Details from '@screens/Concept2Details';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="SearchPage" component={SearchPage} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="BookDetails" component={BookDetails} />
        <Stack.Screen name="SavedBooks" component={SavedBooks} />
        <Stack.Screen name="Concept2Details" component={Concept2Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;