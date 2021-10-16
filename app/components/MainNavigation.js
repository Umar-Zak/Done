import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {MaterialCommunityIcons} from "@expo/vector-icons"
import ListingAuth from './ListingAuth';
import ListingsEditScreen from '../screens/ListingsEditScreen';
import AccountNavigation from './AccountNavigation';
import NewListingButton from './NewListingButton';
import colors from '../config/colors';

const Tabs=createBottomTabNavigator()
function MainNavigation(props) {
    return (
        <Tabs.Navigator
            screenOptions={{
            tabBarInactiveTintColor: colors.secondary,
            tabBarShowLabel:false
            }}
        >
            <Tabs.Screen
                name="Feed"
                component={ListingAuth}
                options={{
                headerShown: false,
                tabBarIcon: ({color,size }) =>
                <MaterialCommunityIcons
                name="home" size={ 35} color={color } />
                }}
            />
            <Tabs.Screen
                name="EditListing"
                component={ListingsEditScreen}
                options={{
                title:"Edit Listing",
                tabBarButton:()=><NewListingButton/>
                }}
            />
            <Tabs.Screen
                name="Settings"
                component={AccountNavigation}
                options={{
                headerShown:false,
                tabBarIcon: ({color}) =>
                <MaterialCommunityIcons
                name="account" size={ 35} color={color } />
                }}
            />
        </Tabs.Navigator>
    );
}

export default MainNavigation;