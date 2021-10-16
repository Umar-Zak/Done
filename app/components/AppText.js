import React from 'react';

import { Text, Platform,StyleSheet } from 'react-native';

const AppText = ({children,style,...otherProps}) => {
    return (
        <Text style={[styles.text,style]} {...otherProps} >{ children}</Text>
    );
}

const styles = StyleSheet.create({
    text: { 
        fontSize: 16,
        fontFamily:Platform.OS==="android" ? "Roboto": "Avenir"
    }
})

export default AppText;