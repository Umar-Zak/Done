import React, { useState } from 'react';
import {  Button, Modal, StyleSheet, TouchableWithoutFeedback,View ,FlatList} from 'react-native';
import { MaterialCommunityIcons} from "@expo/vector-icons"
import colors from '../config/colors';
import defaultStyles from "../config/styles"
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';
 
function AppPicker({ icon, placeholder, list,selectedItem,onSelectedItem }) {
    const [modalVisible,setModalVisible]=useState(false)
    return (
        <React.Fragment>
             <TouchableWithoutFeedback onPress={()=>setModalVisible(true)} >
             <View style={styles.container} > 
            {icon && <MaterialCommunityIcons
                style={styles.icon}
                name={icon} size={20}
                color={colors.medium}
            />}
            {selectedItem&& <AppText
                style={[defaultStyles.text, styles.text]} >
                { selectedItem.label }
            </AppText>}
           { !selectedItem && <AppText
                style={[defaultStyles.text, styles.placeholder]} >
                {placeholder}
            </AppText>}
            <MaterialCommunityIcons
                name="chevron-down" size={20}
                color={colors.medium}
            />
        </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <Button title="Close" onPress={() => setModalVisible(false)} />
                    <FlatList
                       contentContainerStyle={{alignItems:"center"}}
                        data={list}
                        keyExtractor={item => item.value.toString()}
                        numColumns={4}
                        renderItem={({ item }) =>
                            <PickerItem
                                label={item.label}
                                icon={item.icon}
                                onPress=
                                {() => {
                                    setModalVisible(false)
                                    onSelectedItem(item)
                                } }
                            />}
                    />
                </Screen>
            </Modal>
       </React.Fragment>
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
    placeholder: {
        color: colors.medium,
        flex:1
    },
    text: {
        flex: 1,
        
    },
    icon: {
        marginRight:10
    }
})

export default AppPicker;