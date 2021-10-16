import React from 'react';
import { StyleSheet, View,FlatList } from 'react-native';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import colors from '../config/colors';
function AccountScreen({ navigation }) {
    
    const menuItems = [
        {
            title: "My Listings",
            icon: {
                name: "format-list-bulleted",
                backgroundColor: colors.primary
            }
        },
        {
            title: "My Messages",
            icon: {
                name: "email",
                backgroundColor: colors.secondary
            },
            targetScreen:"Messages"
        },
    ]
    return (
       
        <Screen style={styles.screen} >
            <View style={styles.container}>
                 <ListItem
                title="Umar Zakaria Abanga"
                subTitle="umarabanga78@gmail.com"
                image={require("../assets/mosh.jpg")}
            />
            </View>
            <View style={styles.container} >
                <FlatList
                    data={menuItems}
                    keyExtractor={item => item.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) =>
                        <ListItem title={item.title}
                        IconComponent={<Icon name={item.icon.name}
                                backgroundColor={item.icon.backgroundColor} />}
                            onPress={()=>navigation.navigate(item.targetScreen)}
                        />}
                />
            </View>
            <View style={styles.logOut} >
                <ListItem title="Log Out"
                    IconComponent={<Icon name="logout"
                        backgroundColor="#ffe66d" />} />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor:colors.lightGray
    },
    container: {
        marginVertical:20
    },
    logOut: {
        marginTop:10
    }
})
export default AccountScreen;