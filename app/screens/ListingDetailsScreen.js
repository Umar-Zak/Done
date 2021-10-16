import React from 'react';
import { View,Image,StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
const ListingDetailsScreen = ({ route: { params } }) => {
    const item=params.item
    return (
        <View>
            <Image style={styles.image} source={{uri: item.images[0].url}} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{ item.title}</AppText>
                <AppText style={styles.price}>$ { item.price}</AppText>
            </View>
            <ListItem
                title="Mosh Hamedani"
                subTitle="10 Listings"
                image={require("../assets/mosh.jpg")} />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height:300
    },
    detailsContainer: {
        padding: 20,
        marginBottom:20
    },
    title: {
        fontSize: 19,
        fontWeight:"700"
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        marginTop:5
    }
})

export default ListingDetailsScreen;