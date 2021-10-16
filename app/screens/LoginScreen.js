import React  from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from "yup"
import Screen from '../components/Screen';
import {AppForm,AppFormField,SubmitButton} from "../components/form"
 
const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password:Yup.string().required().min(4).max(10).label("Password")
})

function LoginScreen(props) {
    
    return (
        <Screen style={styles.container} >
            <Image
                style={styles.logo}
                source=
                {require("../assets/logo-red.png")}
            />

            <AppForm
                initialValues={{ email: "test", password: "" }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                   <AppFormField
                autoCorrect={false}
                autoCapitalize="none"
                icon="email"
                name="email"
                placeholder="Email address"
                keyboardType="email-address"
                textContentType="emailAddress"
             />
            <AppFormField
                autoCorrect={false}
                autoCapitalize="none"
                icon="lock"
                name="password"
                placeholder="Password"
                secureTextEntry
                textContentType="password"
             />
           <SubmitButton title="Login" />

            </AppForm>

            
       </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
       
        padding:10
    },
    logo: {
        width: 80,
        height: 80,
        marginTop: 50,
        marginBottom: 50,
        alignSelf:"center"
    },

})

export default LoginScreen;