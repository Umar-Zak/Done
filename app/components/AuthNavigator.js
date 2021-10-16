import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import WelcomeScreen from '../screens/WelcomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack=createNativeStackNavigator()

function  AuthNavigator(props) {
 return (
     <Stack.Navigator
          >
         <Stack.Screen options={{ headerShown: false }} name="Welcome" component={WelcomeScreen} />
         <Stack.Screen name="SignUp" component={RegisterScreen} />
         <Stack.Screen name="LogIn" component={LoginScreen} />
    </Stack.Navigator>
    );
}
 
export default AuthNavigator;