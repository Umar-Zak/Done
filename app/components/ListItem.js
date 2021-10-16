import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import Swipeable from 'react-native-gesture-handler/Swipeable';
import colors from '../config/colors';
import AppText from './AppText';

const ListItem = ({image,title,subTitle,onPress,renderRightAction,IconComponent,showChevron=false}) => {
    return (
        <Swipeable renderRightActions={renderRightAction}>
            <TouchableHighlight underlayColor={colors.lightGray} onPress={onPress}>
                <View style={styles.container} >
                    {IconComponent}
            {image && <Image
                source={image}
                style={styles.image}
            />}
            <View style={styles.textContainer}>
                <AppText style={styles.title} numberOfLines={1} >{ title}</AppText>
              {subTitle &&  <AppText style={styles.price}  numberOfLines={2} >{ subTitle}</AppText>}
                    </View>
                   {showChevron && <MaterialCommunityIcons name="chevron-right" size={25} color={colors.medium} />}
        </View>
       </TouchableHighlight>
        </Swipeable>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: "white",
        alignItems:"center"
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        fontWeight:"500"
    },
    textContainer:{
        marginLeft: 10,
        justifyContent:'center',
        flex:1
    },
    price: {
        color:colors.medium
    }
})

export default ListItem;