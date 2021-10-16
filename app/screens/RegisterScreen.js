import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from "yup"
import { AppForm, AppFormField, SubmitButton } from '../components/form';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    email: Yup.string().email().required().label("Email"),
    username: Yup.string().min(3).required().label("Username"),
    password:Yup.string().min(4).max(10).required().label("Password")
})
function RegisterScreen(props) {
    return (
        <Screen style={styles.screen} >
            <AppForm
                initialValues={{
                    email: "",
                    password: "",
                    username:""
                }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="account"
                    name="username"
                    placeholder="Name"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    icon="email"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <SubmitButton title="register" />
             </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: 30,
        paddingHorizontal:15
    }
})

export default RegisterScreen;