import React from 'react';
import {useFormikContext} from "formik"
import AppTextInput from '../../components/AppTextInput';
import ErrorMessage from './ErrorMessage'; 
function AppFormField({ name,...otherProps }) {
    const {setFieldTouched,errors,setFieldValue,touched,values}=useFormikContext()
    return (
        <>
        <AppTextInput
        onBlur={()=>setFieldTouched(name)}
        onChangeText={text => setFieldValue(name,text)}
        {...otherProps}
        value={values[name]}
        />
        <ErrorMessage visible={touched[name]} error={errors[name]} />
        </>
    );
}

export default AppFormField;