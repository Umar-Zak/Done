import React from 'react';
 
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from './app/components/MainNavigation';
import NavigationTheme from './app/components/NavigationTheme';

import NetInfo, {useNetInfo} from "@react-native-community/netinfo"
import AsyncStorage from "@react-native-async-storage/async-storage"
export default function App() {
  const demo = async () => {
    await AsyncStorage.setItem("person", JSON.stringify({ name: "Umar Zak next" }))
    const data = await AsyncStorage.getItem("person")
    const person = JSON.parse(data)
    console.log(person)
  }
  
  demo()
  return ( 
   null
  )
}

 
