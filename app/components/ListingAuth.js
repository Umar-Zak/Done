import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ListinsScreen from '../screens/ListinsScreen';
 
import ListingDetailsScreen from '../screens/ListingDetailsScreen';


const Stack=createNativeStackNavigator()
function ListingAuth(props) {
    return (
        <Stack.Navigator  screenOptions={{headerShown:false,presentation:"modal"}} >
            <Stack.Screen name="Listing" component={ListinsScreen} />
            <Stack.Screen name="ListingDetail" component={ListingDetailsScreen} />
       </Stack.Navigator>
    );
}

export default ListingAuth;