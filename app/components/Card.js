import React from 'react';

import { View ,StyleSheet, Image,TouchableHighlight} from 'react-native';
import AppText from './AppText';

 import colors from '../config/colors';
const Card = ({imageUrl,title,subTitle,onPress}) => {
    return (
        <TouchableHighlight underlayColor={colors.lightGray} onPress={onPress}>
             <View style={styles.card} >
            <Image resizeMode="cover" source={{uri:imageUrl}} style={styles.image} />
            <View style={styles.textDetails} >
                <AppText >{ title}</AppText>
                <AppText style={styles.subTitle}
                >{subTitle}</AppText>
            </View>
        </View>
       </TouchableHighlight>
    );
}
const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        backgroundColor: colors.light,
        width: "100%",
        overflow: "hidden",
        marginBottom:50
    },
    image: {
        width: "100%",
        height:250
    },
    textDetails: {
        padding:20
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold",
        marginTop:5
    }
})
export default Card;