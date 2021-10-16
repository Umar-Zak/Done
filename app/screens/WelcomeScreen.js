import React from 'react';
import { StyleSheet, View, ImageBackground, Image, Text } from 'react-native';
import Button from '../components/Button';

import colors from '../config/colors';

const WelcomeScreen = ({ navigation }) => {
    const handleRegister = () => {
        navigation.navigate("SignUp")
    }
    const handleLogIn = () => {
        navigation.navigate("LogIn")
    }
    return (<View style={styles.container} >
        <ImageBackground blurRadius={10} source={require("../assets/background.jpg")} style={styles.image} resizeMode="cover">
            <View style={styles.logoView}>
                <Image source={require("../assets/logo-red.png")} style={styles.logo} />
                <Text style={styles.text}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.authView}>
                 <Button onPress={handleLogIn} text="login" />
                 <Button onPress={handleRegister} text="register" color="secondary" />
                 
            </View>
        </ImageBackground>
    </View> );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
       
    },
    image: {
        flex: 1,
         flexWrap: "wrap",
        flexDirection:"row"
    },
    logo: {
        width: 90,
        height:90
    }
    ,
    logoView: {
        height: 300,
        width: "100%",
       paddingTop:"9%",
        alignItems:"center"
    },
    authView: {
        alignSelf: "flex-start",
        height: 140,
        width: "100%",
        position: "absolute",
        bottom: 0,
        paddingHorizontal:15
        
        
    },
    text: {
        fontSize: 20,
        paddingVertical:20,
        fontWeight:"600"
    }
})
 
export default WelcomeScreen;