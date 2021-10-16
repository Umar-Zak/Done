import React from 'react';
import { useFormikContext } from "formik"

import ImageInputList from '../ImageInputList';
import { ErrorMessage } from '.';

function FormImagePicker({name}) {
    const { errors, setFieldValue, touched, values } = useFormikContext()
    const imageUris = values[name]
    const addImage = (uri) => {
        setFieldValue(name,[...imageUris,uri])
    }

    const removeImage = (uri) => {
        setFieldValue(name,imageUris.filter(imageUri=>imageUri!==uri))
    }

 return (
     <>
          <ImageInputList
         imageUris={imageUris}
         onAddImage={addImage}
         onRemoveImage={removeImage}
     />
     <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
    );
}
 
export default FormImagePicker;