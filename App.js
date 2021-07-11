/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import { StatusBar } from 'react-native';

// import HomeScreen from './src/screens/HomeScreen';

// import DestinationSearch from './src/screens/DestinationSearch';

import SearchResults from './src/screens/SearchResults';
const App = () => {


  return (
<>
<StatusBar barStyle="dark-content"/>
{/* <HomeScreen/> */}
{/* <DestinationSearch/> */}
<SearchResults/>
</>
  );
};



export default App;
