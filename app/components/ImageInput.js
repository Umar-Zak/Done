import React, { useEffect } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback,Alert, Image } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import * as ImagePicker from "expo-image-picker"
import colors from '../config/colors';

function ImageInput( {imageUri,onImageChange}) {
     
    const handlePress = () => {
        if (!imageUri) selectImage()
            
        else Alert.alert("Delete", "Are you sure you want to delete", [
            {text:"Yes",onPress:()=>onImageChange(null)},
            {text:"No" },
        ])
    }

     const selectImage = async () => {
    const response = await ImagePicker.launchImageLibraryAsync()
    if (!response.cancelled)
      onImageChange(response.uri)
    }
    const requestPermission =async () => {
    const {status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (status !== "granted")
        alert("You must grant access to this app")
  }
  
  useEffect(() => {
    requestPermission()
  },[])

 return (
     <TouchableWithoutFeedback onPress={handlePress}  >
         <View style={styles.container}>
            {!imageUri && <MaterialCommunityIcons name="camera" size={45} color={colors.medium} />}
            {imageUri && <Image  source={{uri:imageUri}} style={styles.image} />}
  </View>
     </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
   container: {
        width: 100,
        height: 100,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.lightGray,
        overflow: "hidden",
    },

    image: {
        width: 100,
        height:100
    }
    
})
export default ImageInput;