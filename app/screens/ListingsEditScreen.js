import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from "yup"
 import * as Location from "expo-location"
import { AppForm, AppFormField, SubmitButton, } from '../components/form';
import AppFormPicker  from '../components/form/AppFormPicker';
import FormImagePicker from '../components/form/FormImagePicker';
import UseLocation from '../hooks/UseLocation';
import Screen from '../components/Screen';
import listingApi from "../api/listings"
import UploadScreen from './UploadScreen';
const validationSchema = Yup.object().shape({
    title: Yup.string().min(1).required().label("Title"),
    price: Yup.number().min(1).max(10000).required().label("Price"),
    categgory: Yup.object().nullable().label("Category"),
    description: Yup.string().required().label("Description"),
    images:Yup.array().min(1,"Please select at least 1 image")
})

function ListingsEditScreen(props) {
    const categories = [
        {
            label: "Furniture", value: 1, icon: {
                name: "floor-lamp",
                style: {
                    backgroundColor:"#fc5c65"
                }
            }
        },
        {
            label: "Cars", value: 2
            , icon: {
                name: "car",
                style: {
                    backgroundColor:"#fd9644"
                }
            }
        },
        {
            label: "Cameras", value: 3
            , icon: {
                name: "camera",
                style: {
                    backgroundColor:"#fed330"
                }
            },
            
        },
        {
            label: "Games", value: 4
            , icon: {
                name: "cards",
                style: {
                    backgroundColor:"#26de81"
                }
            },
            
        },
        {
            label: "Clothing", value: 5
            , icon: {
                name: "shoe-heel",
                style: {
                    backgroundColor:"#2bcbba"
                }
            },
            
        },
        {
            label: "Sports", value: 6
            , icon: {
                name: "basketball",
                style: {
                    backgroundColor:"#45aaf2"
                }
            },
            
        },
        {
            label: "Movies & Music", value: 7
            , icon: {
                name: "headphones",
                style: {
                    backgroundColor:"#4b7bec"
                }
            },
            
        },
    ]
    const [uploadVisible, setUploadVisible] = useState(false)
    const [progress, setProgress] = useState(0)
    

    const location = UseLocation()
    
    const handleSubmit = async (listing,{resetForm})=> {
        setProgress(0)
        setUploadVisible(true)
        const response = await listingApi.addListing({ ...listing, location },
            (progress) => setProgress(progress))
        
        
        if (!response.ok) {
           setUploadVisible(false)
           return alert("Could not save Data")
        }
        resetForm()
    }
    return (
       
        <Screen style={styles.screen} >
            <UploadScreen onDone={()=>setUploadVisible(false)} visible={uploadVisible} progress={progress} />
            <AppForm
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                    images:[]
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <FormImagePicker name="images" />
                <AppFormField
                    name="title"
                    placeholder="Title"
                    maxLength={255}
                />
                <AppFormField
                    name="price"
                    placeholder="Price"
                    maxLength={8}
                    keyboardType="numeric"
                />
                <AppFormPicker
                    placeholder="Category"
                    items={categories}
                    name="category"
                />
                <AppFormField
                    name="description"
                    multiLine
                    numberOfLines={3}
                    placeholder="Description"

                />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    )
}
const styles = StyleSheet.create({
    screen: {
        paddingTop: 30,
        paddingHorizontal:15
    }
})

export default ListingsEditScreen;