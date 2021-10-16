import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';
const Button = ({text,onPress,color="primary"}) => {
    return (
        <TouchableOpacity onPress={onPress}  style={styles.container}>
            <View style={[styles.button,{backgroundColor:colors[color]}]} >
                <Text style={styles.text} >{ text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
     
    button: {
        backgroundColor: colors.primary,
        width: "100%",
        justifyContent: "center",
        paddingVertical: 17,
        borderRadius: 30,
        flexDirection: "row",
        marginVertical:10
    },
    text: {
        color: "white",
        textTransform: "uppercase",
        fontWeight: "500",
        fontSize:17
    }
})

export default Button;