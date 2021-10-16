import React, { useState } from 'react';
import { FlatList,StyleSheet } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

function MessagesScreen(props) {
    const initialMessages = [
        {
            id: 1,
            title: "Kyle James",
            description: "Can we talk on Skype?",
            image:require("../assets/mosh.jpg")
        },
        {
            id: 2,
            title: "Mark Roger",
            description: "Hey reach out and let's talk",
            image:require("../assets/jacket.jpg")
        },
        {
            id: 3,
            title: "Brad Scholes",
            description: "Send me the bill ASAP",
            image:require("../assets/logo-red.png")
        },
        {
            id: 4,
            title: "Anita Jones",
            description: "Hey Zak, let's get this done",
            image:require("../assets/chair.jpg")
        },
        {
            id: 5,
            title: "Marcus Bright",
            description: "I'm interested buddy..",
            image:require("../assets/icon.png")
        },
        {
            id: 6,
            title: "Lao Tadd",
            description: "Can't seem to get you on board",
            image:require("../assets/background.jpg")
        },
        {
            id: 7,
            title: "John Doe",
            description: "Second meeting in Progress",
            image:require("../assets/jacket.jpg")
        },
    ]
    const [messages, setMessages] = useState(initialMessages)
    const [refreshing,setRefreshing]=useState(false)
    const handleDelete = message => {
        setMessages(messages.filter(m=>m.id!==message.id))
    }

    return (
        <Screen style={ styles.screen}>
            <FlatList
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({ item }) =>
                <ListItem
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    onPress={() => console.log("message", item)}
                    renderRightAction=
                    {() => <ListItemDeleteAction
                        onPress={() => handleDelete(item)} />}
                    showChevron={true}
                />}
                
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={()=>setMessages(initialMessages)}
        />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex:1
    }
})
export default MessagesScreen;