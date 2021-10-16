import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import AppText from './AppText';
function PickerItem({label,onPress,icon}) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} >
           {icon && <View style={[styles.iconContainer,icon.style]}>
            <MaterialCommunityIcons name={icon.name} size={35} color="white" />
            </View>}
            <AppText style={styles.text} >{ label}</AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginVertical: 10,
        paddingHorizontal: 10
       
    },
    iconContainer: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "tomato",
        alignItems:"center",
        justifyContent:"center",
    }
    ,
    text: {
        padding:8
    }
})

export default PickerItem;