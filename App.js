 import React from 'react';
 import {
   StyleSheet,
   useColorScheme,
 } from 'react-native';
 
 import {
   Colors,
 } from 'react-native/Libraries/NewAppScreen';
 import RootScreen from './screens/RootScreen';
 
 
 
 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   return (
       
         <RootScreen />
 
     
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
 });
 
 export default App;
 