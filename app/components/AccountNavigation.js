import React from 'react';
 import {createNativeStackNavigator} from "@react-navigation/native-stack"
import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/MessagesScreen';

 const Stack=createNativeStackNavigator()
function AccountNavigation(props) {
    return (
        <Stack.Navigator  >
            <Stack.Screen options={{title:"My Account"}} name="MyAccount" component={AccountScreen} />
            <Stack.Screen options={{title:"My Messages"}} name="Messages" component={MessagesScreen} />
        </Stack.Navigator>
    );
}

export default AccountNavigation;