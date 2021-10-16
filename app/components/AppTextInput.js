import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons} from "@expo/vector-icons"
import colors from '../config/colors';
import defaultStyles from "../config/styles"
function AppTextInput( {icon,...others}) {
    return (
        <View style={styles.container} > 
            {icon && <MaterialCommunityIcons
                style={styles.icon}
                name={icon} size={20}
                color={colors.medium}
            />}
            <TextInput
                placeholderTextColor={colors.medium}
                style={[styles.input,defaultStyles.text]}
                {...others} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGray,
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
        borderRadius: 25,
        marginVertical: 10,
        width: "100%",
        paddingHorizontal:20
    },
    input: {
        flex: 1,
        
    },
    icon: {
        marginRight:10
    }
})

export default AppTextInput;