import React, { useEffect, useState } from 'react';
import { StyleSheet,FlatList, ActivityIndicator } from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';
import listingsApi from "../api/listings"
import AppText from '../components/AppText';
import Button from '../components/Button';
import useApi from '../hooks/UseApi';
function ListinsScreen({navigation}) {
    const {request:loadListings,error,loading,data:lists} = useApi(listingsApi.getListings)
    useEffect(() => {
        loadListings()
    },[])
    const handlePress = item => {
        navigation.navigate("ListingDetail",{item})
    }
    return (
        <Screen style={styles.screen}>
           {error && <>
                <AppText>Sorry could not retrieve products</AppText>
                <Button text="Retry" onPress={loadListings} />
            </>}
            
            <ActivityIndicator animating={loading} size="large"/>
            <FlatList
                data={lists} 
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) =>
                    <Card title={item.title}
                         subTitle={"$" + item.price}
                        imageUrl={item.images[0].url}
                        onPress={()=>handlePress(item)}
                    />}
            />
       </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor:colors.lightGray
    }
})

export default ListinsScreen;