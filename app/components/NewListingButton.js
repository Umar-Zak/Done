import React from 'react';
import { View, StyleSheet,TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import {useNavigation} from "@react-navigation/native"
import colors from '../config/colors';

function NewListingButton(props) {
    const navigation=useNavigation()
 return (
     <TouchableWithoutFeedback onPress={()=>navigation.navigate("EditListing")} >
           <View style={styles.container}>
         <MaterialCommunityIcons name="plus-circle" color="white" size={25} />
  </View>
   </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
   container: {
        width: 70,
        height: 70,
        backgroundColor: colors.primary,
        borderRadius: 35,
        bottom: 20,
        borderColor: "white",
        borderWidth: 10,
        justifyContent: "center",
       alignItems:"center"
   }
})
export default NewListingButton;