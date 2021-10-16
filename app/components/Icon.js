import React from 'react';
import { View } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"
function Icon({name,size=40,backgroundColor="#000",iconColor="white"}) {
    return (
        <View
            style={{
                backgroundColor,
                height: size,
                width: size,
                borderRadius: size / 2,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <MaterialCommunityIcons name={name} size={size*0.5} color={iconColor} />
        </View>
    );
}

export default Icon;