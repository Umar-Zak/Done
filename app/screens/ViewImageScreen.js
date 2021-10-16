import React from 'react';
import { SafeAreaView,StyleSheet,View,StatusBar,Platform, Image } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import colors from "../config/colors"
const ViewImageScreen = () => {
    return (<SafeAreaView style={styles.container} >
        <View style={styles.buttonsContainer} >
            <View style={styles.close} >
        <MaterialCommunityIcons name="close" color="white" size={35} />
            </View>
            <View style={styles.delete}>
                <MaterialCommunityIcons name="trash-can-outline" color="white" size={35} />
            </View>
        </View>
        <Image style={styles.image} source={require("../assets/chair.jpg")} resizeMode="contain" />
    </SafeAreaView> );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.dark,
        paddingTop:Platform.OS==="android" ? StatusBar.currentHeight : 0
    },
    buttonsContainer: {
        width: "100%",
        flexDirection: "row",
        position: "relative",
        top: 0,
        justifyContent: "space-between"
        , height: 120,
        alignItems: "center",
        paddingLeft: "5%",
        paddingRight: "5%",
        marginBottom:20
    },
    close: {
        width: 50,
        height: 50,
        
    },
    delete: {
        width: 50,
        height: 50,
     
    },
    image: {
        width: "100%",
        height:"75%"
    }
})
 
export default ViewImageScreen;